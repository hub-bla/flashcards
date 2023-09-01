import styled from "styled-components"

const TextDiv = styled.div`
	margin-bottom: 25px;
	font-size: 26px;
`

function CorrectAnswer({ term, definition, nextTerm }) {
	return (
		<>
			
			<h1>{term}</h1>
			<TextDiv>Correct answer: {definition}</TextDiv>
			<button onClick={nextTerm}>Next</button>
		</>
	)
}

export default CorrectAnswer
