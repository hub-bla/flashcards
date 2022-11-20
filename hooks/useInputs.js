import { nanoid } from "nanoid"
import { useState, useRef } from "react"
import { useAuth } from "../context/AuthContext"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseLogin"
import { useRouter } from "next/router"
import Term from "../components/Term"

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
				<Term
					deleteTerm={deleteTerm}
					id={id}
					handleChange={handleChange}
					defValue=''
				/>,
			]
		})
	}

	function loadTerms() {
		setTerms(
			Object.keys(inputs).map((id) => {
				if (id !== "titleOfDeck") {
					return (
						<Term
							deleteTerm={deleteTerm}
							id={id}
							handleChange={handleChange}
							defValue=''
							term={inputs[id]["term"]}
							definition={inputs[id]["definition"]}
						/>
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
