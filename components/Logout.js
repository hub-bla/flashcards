import { useAuth } from "../context/AuthContext"

function Logout(){
    const {logout} = useAuth()

    return(
        <div onClick={logout}>Logout</div>
    )


}



export default Logout