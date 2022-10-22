import { useAuth } from "../context/AuthContext"
import styled from "styled-components"
import { Button } from "./Login"

const LogoutAnchor = styled.a`
	cursor: pointer;
`

function Logout() {
	const { logout } = useAuth()

	return <LogoutAnchor onClick={logout}>Logout</LogoutAnchor>
}

export default Logout
