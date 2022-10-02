import { nanoid } from "nanoid"
import { useState, useRef, useEffect } from "react"

export default function createDeck(){
    const [inputs, setInputs] = useState({
        titleOfDeck: "Deck Title"
    })
    const [terms, setTerms] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const titleRef = useRef(null)


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
                <div className="term-container" id={id}>
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

    function disableWithEnter(e){
        if(e.key === "Enter"){
            titleRef.current.blur()
        }
    }

    return (
        <div>
            <input 
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

            <h2>Terms in deck</h2>

            {terms}

            <button 
            onClick={addTerm}
            onFocus={addTerm}
            >
                + Add term
                </button>
            
        </div>
    )
}