

const TermsDiv = styled.div`
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

export default function Terms(){
    const {currentUser} = useAuth()
    return (
        currentUser ? 
        <TermsDiv>
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
                ref={saveRef}
                >
                    Save deck
                </button>
                
            </TermsControl>
        
        </TermsDiv> :
        <div>You need to be logged in</div>
        
    )
}