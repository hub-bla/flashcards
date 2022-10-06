import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useFetchDecks from '../hooks/FetchDecks'
import { nanoid } from "nanoid"
import useInputs from "../hooks/useInputs"
import styled from "styled-components"

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

function Deck(){
    const {loading, decks, error} = useFetchDecks()
    const {handleChange, handleSave, disableWithEnter, disable, addTerm, terms, isDisabled, titleRef, saveRef, inputs, changeDisability, loadTerms, setInputs} = useInputs()
    
    const router = useRouter()
    const  id = router.query.id

    //make useInputs hook
    // {inputs, setInputs, handleChange} = useInputs()
    useEffect( () => {
        if (!loading){
            Object.keys(decks).map(key =>{
                
                if(key === id) {
                    if (inputs == decks[id]){
                        loadTerms(decks[id])
                    }else{
                        setInputs(decks[id])
                    }
                    

                        
                    
                }
            })
        
        }

    }, [loading, inputs])

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
   
    
    return (
        
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
                onClick={() => handleSave(id)}
                ref={saveRef}
                >
                    Save deck
                </button>
                
            </TermsControl>
        
        </Terms>
        
    )
}

export default Deck