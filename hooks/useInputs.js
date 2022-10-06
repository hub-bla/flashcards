import { nanoid } from "nanoid"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import {doc, setDoc} from 'firebase/firestore'
import { db } from "../firebase"
import { useRouter } from "next/router"
export default function useInputs(){
    const {currentUser} = useAuth()

    const [inputs, setInputs] = useState({
        titleOfDeck: "Deck Title"
    })
    const [terms, setTerms] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    
    const titleRef = useRef(null)
    const saveRef = useRef(false)
    const router = useRouter()
    
    function handleChange(event){
        const {id, value, name} = event.target
        setInputs(prevInputs => {
            if (typeof prevInputs[id] !== 'object' || prevInputs[id] === null){
                prevInputs[id] = {
                    term: '',
                    definition: ''
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
                console.log(terms)
                if (term?.props?.id !== id){
                    return term
                }
                else{
                    setInputs(prevInputs => {
                        console.log('hi')
                        delete prevInputs[term?.props.children[0].props.id]
                        delete prevInputs[term?.props.children[1].props.id]
                        return prevInputs
                    })
                }
            })
        })
    }


    function addTerm(){
        const id = nanoid()
    
        setTerms(prevTerms =>{
            
            
            return [
                ...prevTerms,
                <div className="term-container" id={id} key={id}>
                    <input 
                        type="text" 
                        id={id}
                        name="term"
                        value={(inputs[id]?.term)} 
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id={id}
                        name="definition"
                        value={(inputs[id]?.definition)} 
                        onChange={handleChange}
                    />
                    <button id={id} onClick={deleteTerm}>
                        Delete Term
                    </button>
                </div>
            ]
        })
    }

    function loadTerms(){
        
        
        setTerms(Object.keys(inputs).map(id =>{
            if(id !== "titleOfDeck"){
                
                return(
                    <div className="term-container" id={id} key={id}>
                        <input 
                            type="text" 
                            id={id}
                            name="term"
                            value={inputs[id].term} 
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            id={id}
                            name="definition"
                            value={inputs[id].definition} 
                            onChange={handleChange}
                        />
                        <button id={id} onClick={deleteTerm}>
                            Delete Term
                        </button>
                    </div>
                
                )
            }
        }
            ))
    }

    function disable(){
        setIsDisabled(true)
    }




    async function handleSave(id){
        saveRef.current.disabled = true
        const userRef = doc(db, 'users', currentUser.uid)
        
        if(typeof id === "string"){
            await setDoc(userRef, {
                [id]: inputs
            }, {merge:true})
        }else{
            await setDoc(userRef, {
                [nanoid()]: inputs
            }, {merge:true})
        }
        router.push("/")
    }

    function changeDisability(){
        setIsDisabled(false)
        
    }

    function disableWithEnter(e){
        if(e.key === "Enter"){
            titleRef.current.blur()
        }
    }
    
    

    return{handleChange, handleSave, disableWithEnter, disable, addTerm, terms, isDisabled, titleRef, saveRef, inputs, changeDisability, loadTerms, inputs, setInputs}
}