import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import useFetchDecks from "../hooks/FetchDecks"
import { db } from "../firebaseLogin"
import useInputs from "../hooks/useInputs"
import styled from "styled-components"
import { doc, updateDoc, deleteField } from "firebase/firestore"
import EditIcon from "../public/pencil.svg"
import Practise from "../components/Practise"
import Image from "next/image"
const Terms = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 20px;
`

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 20px;
`

const TitleOfDeck = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
	font-size: 20px;
	&:focus {
		border-bottom: 2px solid #fff;
	}

	&:disabled {
		color: #fff;
	}
`

const TitleControl = styled.div`
	margin-bottom: 30px;
`

const TermsControl = styled.div`
	display: flex;
	gap: 20px;
`

const Options = styled.div`
	display: flex;
	width: 100%;
	gap: 20px;
	margin-bottom: 20px;
	justify-content: flex-end;
`

const EditButton = styled.button`
	border: none;
	padding: 0;

	&:hover {
		background-color: transparent;
	}

	&:focus {
		outline: none;
	}
`

function Deck() {
	const { currentUser } = useAuth()
	const [secondLoading, setSecondLoading] = useState(true)

	const { loading, decks, error } = useFetchDecks()
	const {
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
		setInputs,
	} = useInputs()

	const [practise, setPractise] = useState(false)

	const router = useRouter()
	const id = router.query.id

	//make useInputs hook
	// {inputs, setInputs, handleChange} = useInputs()
	useEffect(() => {
		if (!loading) {
			if (secondLoading) {
				Object.keys(decks).map((key) => {
					if (key === id) {
						setInputs(decks[id])
						setSecondLoading(false)
					}
				})
			} else {
				loadTerms(inputs)
			}
		}
	}, [loading, secondLoading])

	// console.log(data)
	// const currentDeckData = Object.keys(data[id]).map(key => {
	//     if (key === "titleOfDeck"){
	//         return(
	//             <h1>{data[id][key]}</h1>
	//         )
	//     }else{
	//         return(
	//             <div>
	//                 <div>{data[id][key]["term"]}</div>
	//                 <div>{data[id][key]["definition"]}</div>
	//             </div>
	//         )
	//     }
	// })

	async function deleteDeck() {
		const userRef = doc(db, "users", currentUser.uid)
		await updateDoc(userRef, { [id]: deleteField() }).then(() => {
			console.log("Code Field has been deleted successfully")
			router.push("/")
		})
	}

	useEffect(() => {
		if (!isDisabled) {
			titleRef.current.focus()
		}
	}, [isDisabled])

	return !practise ? (
		<Terms>
			<Options>
				<button
					onClick={() => {
						setPractise(true)
					}}>
					Practise
				</button>
				<button onClick={deleteDeck}>Delete Deck</button>
			</Options>
			<TitleControl>
				<TitleOfDeck
					type='text'
					value={inputs["titleOfDeck"]}
					name='titleOfDeck'
					id='titleOfDeck'
					onChange={handleChange}
					ref={titleRef}
					disabled={isDisabled}
					onBlur={disable}
					onKeyUp={disableWithEnter}
				/>

				{isDisabled && (
					<EditButton onClick={changeDisability}>
						<Image src={EditIcon} onClick={changeDisability} alt='' />
					</EditButton>
				)}
			</TitleControl>

			<h2>Terms in deck</h2>
			<FlexContainer>{terms}</FlexContainer>

			<TermsControl>
				<button onClick={addTerm}>+ Add Term</button>

				<button onClick={() => handleSave(id)} ref={saveRef}>
					Save Deck
				</button>
			</TermsControl>
		</Terms>
	) : (
		<Practise inputs={inputs} />
	)
}

export default Deck
