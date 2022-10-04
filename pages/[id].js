import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useFetchDecks from '../hooks/FetchDecks'
import { nanoid } from "nanoid"

function Deck(){
    const {loading, decks, error} = useFetchDecks()
    const [data, setData] = useState(null)
    
    const router = useRouter()
    const  id = router.query.id
    useEffect( () => {
        if (!loading){
        
           setData( Object.keys(decks[id]).map(key => {
            if (key !== "titleOfDeck"){
                return(
                    <div key={nanoid()}>
                        <div>{decks[id][key]["term"]}</div>
                        <div>{decks[id][key]["definition"]}</div>
                    </div>
                )
            }
        }))
        }

    }, [loading])

    
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
    return(
        <div>
            <h1>{!loading && decks[id]["titleOfDeck"]}</h1>
            <div>{data}</div>
        </div>
    )
}

export default Deck