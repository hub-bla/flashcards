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
import Deck from "../components/Deck"
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

function DeckSite() {
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

	function practiseMode(){
		setPractise(true)
	}

	//make useInputs hook
	// {inputs, setInputs, handleChange} = useInputs()
	useEffect(() => {
		if (!loading) {
			console.log(currentUser)
			if (secondLoading && currentUser) {
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
		<Deck creator={false} practise={practiseMode}/>
	) : (
		<Practise inputs={inputs} />
	)
}

export default DeckSite
