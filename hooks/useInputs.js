import { nanoid } from "nanoid"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseLogin"
import { useRouter } from "next/router"
import styled from "styled-components"
import Image from "next/image"
import TrashIcon from "../public/trash.svg"

const TermDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	background-color: #418358;
	padding: 20px 10px;
	border-radius: 10px;
`

const Input = styled.input`
	border-radius: 5px;

	height: 25px;
	padding: 10px 5px;
`
const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`

const FlexContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	&:hover {
		background-color: transparent;
	}
`
export default function useInputs() {
	const { currentUser } = useAuth()

	const [inputs, setInputs] = useState({
		titleOfDeck: "Deck Title",
	})
	const [terms, setTerms] = useState([])
	const [isDisabled, setIsDisabled] = useState(true)

	const titleRef = useRef(null)
	const saveRef = useRef(false)
	const router = useRouter()

	function handleChange(event) {
		const { id, value, name } = event.target
		setInputs((prevInputs) => {
			if (typeof prevInputs[id] !== "object" || prevInputs[id] === null) {
				prevInputs[id] = {
					term: "",
					definition: "",
				}
			}
			if (name === "term") {
				prevInputs[id]["term"] = value
				return {
					...prevInputs,
				}
			} else if (name === "titleOfDeck") {
				return {
					...prevInputs,
					titleOfDeck: value,
				}
			} else {
				prevInputs[id]["definition"] = value
				return {
					...prevInputs,
				}
			}
		})
	}

	function deleteTerm(event) {
		const { id } = event.target

		setTerms((prevTerms) => {
			return prevTerms.filter((term) => {
				if (term) {
					if (term.props.id === id) {
						setInputs((prevInputs) => {
							delete prevInputs[term.props.id]

							return prevInputs
						})
						return false
					} else {
						return true
					}
				}
			})
		})
	}

	function addTerm() {
		const id = nanoid()

		setTerms((prevTerms) => {
			return [
				...prevTerms,
				<TermDiv className='term-container' id={id} key={id}>
					<Options>
						<Button id={id} onClick={deleteTerm}>
							<Image id={id} src={TrashIcon} onClick={deleteTerm} alt='' />
						</Button>
					</Options>
					<FlexContainer>
						Term
						<Input
							type='text'
							id={id}
							name='term'
							defaultValue=''
							onChange={handleChange}
						/>
					</FlexContainer>
					<FlexContainer>
						Definition
						<Input
							type='text'
							id={id}
							name='definition'
							defaultValue=''
							onChange={handleChange}
						/>
					</FlexContainer>
				</TermDiv>,
			]
		})
	}

	function loadTerms() {
		setTerms(
			Object.keys(inputs).map((id) => {
				if (id !== "titleOfDeck") {
					return (
						<TermDiv className='term-container' id={id} key={id}>
							<Options>
								<Button id={id} onClick={deleteTerm}>
									<Image id={id} src={TrashIcon} onClick={deleteTerm} alt='' />
								</Button>
							</Options>
							<FlexContainer>
								Term
								<Input
									type='text'
									id={id}
									name='term'
									defaultValue={inputs[id].term}
									onChange={handleChange}
								/>
							</FlexContainer>
							<FlexContainer>
								Definition
								<Input
									type='text'
									id={id}
									name='definition'
									defaultValue={inputs[id].definition}
									onChange={handleChange}
								/>
							</FlexContainer>
						</TermDiv>
					)
				}
			})
		)
	}

	function disable() {
		setIsDisabled(true)
	}

	async function handleSave(id) {
		saveRef.current.disabled = true
		const userRef = doc(db, "users", currentUser.uid)

		if (typeof id === "string") {
			await updateDoc(userRef, { [id]: { ...inputs } })
		} else {
			await setDoc(
				userRef,
				{
					[nanoid()]: inputs,
				},
				{ merge: true }
			)
		}
		router.push("/")
	}

	function changeDisability() {
		setIsDisabled(false)
	}

	function disableWithEnter(e) {
		if (e.key === "Enter") {
			titleRef.current.blur()
		}
	}

	return {
		handleChange,
		handleSave,
		disableWithEnter,
		disable,
		addTerm,
		terms,
		isDisabled,
		titleRef,
		saveRef,
		inputs,
		changeDisability,
		loadTerms,
		inputs,
		setInputs,
	}
}
