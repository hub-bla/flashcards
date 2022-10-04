import Link from "next/link"
import { useEffect, useState } from "react"
import useFetchDecks from "../hooks/FetchDecks"
import Logout from "./Logout"
import styled from "styled-components"
import { Button } from "./Login"
import { nanoid } from "nanoid"


const Deck = styled.div`
    border: 1px solid #fff;
    border-radius: 2px;
    max-width: 700px;
    min-width: 300px;
    padding: 15px;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
`
const Decks = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const OptionPanel = styled.div`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    padding: 40px;
`



export default function UserDashboard(){
    const {loading, decks, error} = useFetchDecks()
    const [data, setData] = useState({})
    console.log(decks)

    
    useEffect( () => {
        if (!loading){

            setData(decks)
        }

    }, [loading])

    const sortedData = Object.keys(data).sort((a, b) => {
        const titleA = data[a]["titleOfDeck"].toUpperCase()
        const titleB = data[b]["titleOfDeck"].toUpperCase() 
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      })

      console.log(sortedData)

    const decksData = sortedData.map(deck => {
        return (
            <Link href={`/${deck}`} key={nanoid()}>
                <Deck>
                    {data[deck].titleOfDeck}
                </Deck>
            </Link>
        )
    })

    return (
        <>
            <OptionPanel>

                <Link href="/createdeck"><a>Create Deck</a></Link>
                <Logout />

            </OptionPanel>

            {!loading && 
            <Decks>
                <h2>Decks</h2>
                {decksData}
            </Decks>}
        </>
    )
}