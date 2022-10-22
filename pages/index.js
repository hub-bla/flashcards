import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import styled from "styled-components"
import { useAuth } from "../context/AuthContext"
import Login from "../components/Login"
import UserDashboard from "../components/UserDashboard"
import favicon from "../public/flashcard.svg"

export default function Home() {
	// const [decks, setDecks] = useState()
	const { currentUser } = useAuth()

	return (
		<>
			<Head>
				<title>Flash Cards</title>
				<meta property='og:title' content='Flash Cards' key='title' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<meta
					name='viewport'
					content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'></meta>
			</Head>

			{!currentUser && <Login />}
			{currentUser && <UserDashboard />}
		</>
	)
}
