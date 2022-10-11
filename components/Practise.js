import { useEffect, useState } from "react"
import styled from "styled-components"

const Question = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AnswerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const UserAnswer = styled.input`
    height: 100%;
    flex: 3;
`

const SubmitAnswer  = styled.button`
    flex: 1;
`

export default function Practise(props){
    const [count, setCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)
    const[data, setData] = useState(props.inputs)
    
    const [term, setTerm] = useState('')
    const [definition, setDefinition] = useState('')
    const [end, setEnd] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')
    const [incorrectAnswers, setIncorrectAnswers] = useState({})
    useEffect(() =>{
        setData(prevData =>{
            delete prevData.titleOfDeck
            return prevData
        })
    }, [])


    useEffect(() => {
        const keys = Object.keys(data)
        const incorrectKeys = Object.keys(incorrectAnswers)
        if (!keys[0] & !incorrectKeys[0]){
            setEnd(true)
        }
        console.log("test")
        if (keys[0]){
            console.log(keys, data[keys[0]]["term"])
            setTerm(data[keys[0]]["term"])
            setDefinition(data[keys[0]]["definition"])
        }else if(incorrectKeys[0]){
            console.log(incorrectAnswers[incorrectKeys[0]]["term"])
            setTerm(incorrectAnswers[incorrectKeys[0]]["term"])
            setDefinition(incorrectAnswers[incorrectKeys[0]]["definition"])
        }
    }, [count, data, incorrectAnswers])

    function nextTerm(){
        const keys = Object.keys(data)
        const incorrectKeys = Object.keys(incorrectAnswers)
        
        setUserAnswer('')
        
        if(keys[0]) {

            setData(prevData =>{
                    
                        delete prevData[keys[0]]
                        return prevData
                })
        }else if(incorrectKeys[0]){
            setIncorrectAnswers(prevIncorrectAnswers =>{
                    
                delete prevIncorrectAnswers[incorrectKeys[0]]
                return prevIncorrectAnswers
            })
        }

        if(userAnswer !== definition){
            if(keys[0]) setIncorrectAnswers(prevIncorrectAnswers =>({...prevIncorrectAnswers, [keys[0]]: {
                term: term,
                definition: definition
            }}))
            else if(incorrectKeys[0]){
            setIncorrectAnswers(prevIncorrectAnswers =>({...prevIncorrectAnswers, [incorrectKeys[0]]: {
                term: term,
                definition: definition
            }}))
        }}else{
            setCount(prevCount => prevCount +1)
        }
    }
    function nextTermKey(e){
        if(e.key ==="Enter") {
            nextTerm()
        }
    }

    function handleUserAnswer(e){
        const {value} = e.target
        setUserAnswer(value)
    }

    return (
        <Question>
            {
                end ?
                <h1>Well done!</h1>
                :
                <>
                    <h1>{term}</h1>
                    <AnswerDiv>

                    <UserAnswer onKeyUp={nextTermKey} onChange={handleUserAnswer} value={userAnswer}/>
                    <SubmitAnswer id="answer" onClick={nextTerm}>Answer</SubmitAnswer>
                    </AnswerDiv>
                </>
            }
        </Question>
    )
}