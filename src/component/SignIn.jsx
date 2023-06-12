import classes from "./SignUp.module.css"
import { useNavigate } from "react-router-dom";
import { authService } from '../Firebase';


export default function SignUp(){
    const navigate2=useNavigate();
const onLogout = () =>{
    authService.signOut();
    navigate2('/');
}

return(
    <>
    <span className={classes.SignUp} onClick={onLogout}>Logout</span> 
    </>
)
}