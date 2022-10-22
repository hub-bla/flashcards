import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import styled from "styled-components"
import EditIcon from "../public/pencil.svg"
import useInputs from "../hooks/useInputs"
import Image from "next/image"
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
	&:focus {
		border-bottom: 2px solid #fff;
	}

	&:disabled {
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

const TermDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 20px;
`

const EditButton = styled.button`
	border: none;
	&:hover {
		background-color: transparent;
	}
`

export default function CreateDeck() {
	const { currentUser } = useAuth()

	const {
		handleChange,
		handleSave,
		disableWithEnter,
		disable,
		addTerm,
		terms,
		isDisabled,
		titleRef,
		saveRef,
		inputs,
		changeDisability,
	} = useInputs()

	useEffect(() => {
		if (!isDisabled) {
			titleRef.current.focus()
		}
	}, [isDisabled])

	return currentUser ? (
		<Terms>
			<TitleControl>
				<TitleOfDeck
					type='text'
					value={inputs.titleOfDeck}
					name='titleOfDeck'
					id='titleOfDeck'
					onChange={handleChange}
					ref={titleRef}
					disabled={isDisabled}
					onBlur={disable}
					onKeyUp={disableWithEnter}
				/>

				{isDisabled && (
					<EditButton onClick={changeDisability}>
						<Image src={EditIcon} onClick={changeDisability} alt='' />
					</EditButton>
				)}
			</TitleControl>

			<TermDiv>
				<h2>Terms in deck</h2>

				{terms}
			</TermDiv>

			<TermsControl>
				<button onClick={addTerm}>+ Add term</button>

				<button onClick={handleSave} ref={saveRef}>
					Save deck
				</button>
			</TermsControl>
		</Terms>
	) : (
		<div>You need to be logged in</div>
	)
}
