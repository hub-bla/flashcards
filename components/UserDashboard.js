import Link from "next/link"
import { useEffect, useState } from "react"
import useFetchDecks from "../hooks/FetchDecks"
import Logout from "./Logout"
import styled from "styled-components"






export default function UserDashboard(){
    const {loading, decks, error} = useFetchDecks()
    const [data, setData] = useState({})
    console.log(decks)

    
    useEffect( () => {
        if (!loading){

            setData(decks)
        }

    }, [loading])
    

    const decksData = Object.keys(data).map(deck => {
        return (
            <div>{deck}</div>
        )
    })

    return (
        <>
            <div>
                UserDashboard
            </div>
            <Logout />

            <Link href="/createdeck"><a>Create Deck</a></Link>

            <h2>Decks</h2>
            {!loading && decksData}
        </>
    )
}