import { useState, useEffect, useRef } from "react"
import {doc, getDoc} from 'firebase/firestore'
import { db } from "../firebaseLogin"
import { useAuth } from "../context/AuthContext"

export default function useFetchDecks(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [decks, setDecks] = useState(null)
    const {currentUser} = useAuth()

    useEffect(() => {
        async function fetchData(){
            try{
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()){
                    setDecks(docSnap.data())
                }
            }catch (err){
                setError("Couldn't fetch data")
            } finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [])


    return {decks, loading, error}
}