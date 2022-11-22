import styled from "styled-components"
import Image from "next/image"
import TrashIcon from "../public/trash.svg"

const TermDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	background-color: #418358;
	padding: 20px 10px;
	border-radius: 10px;
`

const Input = styled.input`
	border-radius: 5px;
	color: #fff;
	height: 25px;
	padding: 10px 5px;
`
const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`

const FlexContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	&:hover {
		background-color: transparent;
	}
`

function Term({ id, defValue, deleteTerm, handleChange, term, definition }) {
	return (
		<TermDiv className='term-container' id={id} key={id}>
			<Options>
				<Button id={id} onClick={deleteTerm}>
					<Image id={id} src={TrashIcon} onClick={deleteTerm} alt='' />
				</Button>
			</Options>
			<FlexContainer>
				Term
				<Input
					type='text'
					id={id}
					name='term'
					defaultValue={term ? term : ""}
					onChange={handleChange}
				/>
			</FlexContainer>
			<FlexContainer>
				Definition
				<Input
					type='text'
					id={id}
					name='definition'
					defaultValue={definition ? definition : ""}
					onChange={handleChange}
					placeholder='definition'
				/>
			</FlexContainer>
		</TermDiv>
	)
}

export default Term
