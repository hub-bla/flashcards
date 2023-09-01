import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import useFetchDecks from "../hooks/FetchDecks"
import useInputs from "../hooks/useInputs"
import Practise from "../components/Practise"
import Deck from "../components/Deck"
function DeckSite() {
	const { currentUser } = useAuth()

	const [practise, setPractise] = useState(false)

	const [secondLoading, setSecondLoading] = useState(true)

	const router = useRouter()
	const id = router.query.id

	const { loading, decks } = useFetchDecks()
	const { inputs, loadTerms, setInputs } = useInputs()

	useEffect(() => {
		if (!loading) {
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
