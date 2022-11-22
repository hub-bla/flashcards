import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import useFetchDecks from "../hooks/FetchDecks"
import useInputs from "../hooks/useInputs"
import Practise from "../components/Practise"
import Deck from "../components/Deck"

function DeckSite() {


	const [practise, setPractise] = useState(false)

	const router = useRouter()
	const id = router.query.id

	function practiseMode() {
		setPractise(true)
	}

	return !practise ? (
		<Deck creator={false} practise={practiseMode} id={id} />
	) : (
		<Practise inputs={inputs} />
	)
}

export default DeckSite
