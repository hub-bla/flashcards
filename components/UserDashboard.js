import Link from "next/link"
import { useEffect, useState } from "react"
import useFetchDecks from "../hooks/FetchDecks"
import Logout from "./Logout"
import styled from "styled-components"

import { nanoid } from "nanoid"
import Image from "next/image"
import EditIcon from "../public/pencil.svg"

const Deck = styled.div`
	border: 2px solid #fff;
	border-radius: 2px;
	width: 300px;
	padding: 15px;
	margin: 20px;
	font-size: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Decks = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const OptionPanel = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: 15px;
	padding: 40px;
`

export default function UserDashboard() {
	const { loading, decks, error } = useFetchDecks()
	const [data, setData] = useState({})
	console.log(decks)

	useEffect(() => {
		if (!loading) {
			setData(decks)
		}
	}, [loading])

	function dataComponents() {
		const sortedData = Object.keys(data).sort((a, b) => {
			const titleA = data[a]["titleOfDeck"].toUpperCase()
			const titleB = data[b]["titleOfDeck"].toUpperCase()
			if (titleA < titleB) {
				return -1
			}
			if (titleA > titleB) {
				return 1
			}
			return 0
		})

		const decksData = sortedData.map((deck) => {
			return (
				<Link href={`/${deck}`} key={nanoid()}>
					<Deck>{data[deck].titleOfDeck}</Deck>
				</Link>
			)
		})
		return decksData
	}

	return (
		<>
			<OptionPanel>
				<Link href='/createdeck'>
					<a>Create Deck</a>
				</Link>
				<Logout />
			</OptionPanel>

			{!loading && (
				<Decks>
					<h2>Decks</h2>
					{data && dataComponents()}
				</Decks>
			)}
		</>
	)
}
