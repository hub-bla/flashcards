import { nanoid } from "nanoid"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import {doc, setDoc} from 'firebase/firestore'
import { db } from "../firebase"
import styled from "styled-components"
import Router, { useRouter } from "next/router"

const Terms = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`



const TitleOfDeck = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    &:focus{
        border-bottom: 2px solid #fff;
    }

    &:disabled{
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

export default function createDeck(){

    const {currentUser} = useAuth()

    const [inputs, setInputs] = useState({
        titleOfDeck: "Deck Title"
    })
    const [terms, setTerms] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [isSaved, setIsSaved] = useState(false)
    const titleRef = useRef(null)


    const router = useRouter()

    function handleChange(event){
        const {id, value, name} = event.target
        setInputs(prevInputs => {
            if (typeof prevInputs[id] !== 'object' || prevInputs[id] === null){
                prevInputs[id] = {
                    term: null,
                    definition: null
                }
            }
            if (name==="term") {
                prevInputs[id]["term"] = value
                return{
                    ...prevInputs
                }
            }else if(name ==="titleOfDeck"){
                return{
                    ...prevInputs,
                    titleOfDeck: value
                }
            }else{
                console.log(prevInputs[id])
                prevInputs[id]["definition"] = value
                return{
                    ...prevInputs
                    }
                }
            }
            
        )
    }


    function deleteTerm(event){
        const {id} = event.target
        setTerms(prevTerms =>{
            return prevTerms.map(term => {
                console.log(term)
                if (term?.props?.id !== id){
                    return term
                }
                else{
                    setInputs(prevInputs => {
                        delete prevInputs[term?.props.children[0].props.id]
                        delete prevInputs[term?.props.children[1].props.id]
                        return prevInputs
                    })
                }
            })
        })
    }
  

    function addTerm(){
        setTerms(prevTerms =>{
            const id = nanoid()
            return [
                ...prevTerms,
                <div className="term-container" id={id} key={id}>
                    <input 
                        type="text" 
                        id={id}
                        name="term"
                        value={inputs[id]} 
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id={id}
                        name="definition"
                        value={inputs[id]} 
                        onChange={handleChange}
                    />
                    <button id={id} onClick={deleteTerm}>
                        Delete Term
                    </button>
                </div>
            ]
        })
    }



    function changeDisability(){
        setIsDisabled(false)
        
    }

    useEffect(() => {
        titleRef.current.focus()
        titleRef.current.setSelectionRange(-1, -1)
    }, [isDisabled])
    

    console.log(inputs)

    function disable(){
        setIsDisabled(true)
    }




    async function handleSave(){
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
            [nanoid()]: inputs
        }, {merge:true})
        setIsSaved(true)
    }

    useEffect(() => {
        if(isSaved) setTimeout(() =>{
            router.push("/")
        }, 1000)
    }, [isSaved])

    function disableWithEnter(e){
        if(e.key === "Enter"){
            titleRef.current.blur()
        }
    }

    return (
        currentUser ? 
        <Terms>
            <TitleControl>
                <TitleOfDeck 
                type="text" 
                value={inputs.titleOfDeck}
                name="titleOfDeck" 
                id="titleOfDeck" 
                onChange={handleChange}
                ref={titleRef}
                disabled={isDisabled}
                onBlur={disable}
                onKeyUp={disableWithEnter}
                />
                
                {isDisabled && 
                <button
                onClick={changeDisability}>
                    Edit
                </button>}
            </TitleControl>
            
            
                <h2>Terms in deck</h2>

                {terms}
            
            <TermsControl>

                <button 
                onClick={addTerm}>
                    + Add term
                </button>

                <button 
                onClick={handleSave}
                disabled={isSaved}>
                    Save deck
                </button>
                
            </TermsControl>
        
        </Terms> :
        <div>You need to be logged in</div>
        
    )
}