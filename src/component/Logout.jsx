import { useNavigate } from 'react-router-dom';
import { authService } from '../Firebase';
import classes from './Logout.module.css';



const Logout = () =>{ 
    const navigate = useNavigate();
    const onLogOut = () =>{
        authService.signOut();
        navigate('/');
    
    };


return(
    <>
     <div className={classes.shadow2} >
    <button onClick={onLogOut} className={classes.logoutbtn}>Logout</button>
    </div>
    </>
);
};
export default Logout
