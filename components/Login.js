import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'


const FlexContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const LoginInputs = styled.input`
width: 300px;
height: 40px;
background-color: transparent;
border: 1px solid #fff;
border-radius: 4px;
padding: 5px 10px;

`

const EmailInput = styled(LoginInputs)`
margin-bottom: 10px;
`

const PasswordInput = styled(LoginInputs)`
margin-bottom: 20px;s
`

const Button = styled.button`
background-color: transparent;
border: 1px solid #fff;
border-radius: 4px;
padding: 6px 15px;
margin-bottom: 10px;
cursor: pointer;
transition: opacity 0.15s;

&:hover{
  opacity: 0.7;
}
`
export {Button}

const ChangeAuthButton = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
`

const Error = styled.div`
    color: red;
    border: 1px solid red;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
`

function Login(){

    const {login, signup} = useAuth()

    const [hasAcc, setHasAcc] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    function handleAuthChange(){
        setHasAcc(prevHasAcc => !prevHasAcc)
    }

    function handleChange(e){
        const {value, type} = e.target
        if (type === "email") setEmail(value)
        else setPassword(value)
        
    }
    

    async function Submit(e){
        if(e.target.tagName === "BUTTON" || e.key === "Enter"){
            if (email === "" || password === ""){
                setErrorMessage("Please type email and password")
            }else{
    
                if(hasAcc){
                    try{
                        return await login(email,password)
                    }
                    catch(err){
                        setErrorMessage("Incorrect email or password")
                    }
                }else{
                    await signup(email, password)
                }
            }
        }

    }

    return(
        <FlexContainer>

        <h1>Flash Cards</h1>
        {errorMessage && <Error>{errorMessage}</Error>}
        <EmailInput 
        placeholder="Email" 
        type="email" 
        value={email} 
        onChange={handleChange}
        onKeyUp={Submit}
        />

        <PasswordInput 
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={handleChange}
        onKeyUp={Submit}
        />

        {hasAcc ?
        <Button onClick={Submit}>Login</Button> 
        : 
        <Button onClick={Submit}>Sign in</Button>
        }
        
        
        <ChangeAuthButton 
        onClick={handleAuthChange}>
            {hasAcc ? "Sign In" : "Log In"}
        </ChangeAuthButton>
        
     </FlexContainer>

    )
}

export default Login