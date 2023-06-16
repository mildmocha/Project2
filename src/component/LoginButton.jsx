import React, {useState} from 'react'
import classes from "./LoginButton.module.css"
import { useNavigate } from "react-router-dom";

import {auth} from '../Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginButton = ()=> {

    const [userData, setUserData] = useState (null);

    function handleGoogleLogin(){
    
        
      const provider = new GoogleAuthProvider(); // provider 구글 설정
      signInWithPopup(auth, provider)// popup을 이용한 sign up
      .then((data) => {
        setUserData(data.user); // user data 설정
      ;
      })
      .catch ((err)=>{
        console.log(err);
      });
      
    }
    const navi = useNavigate()
    return (
        
        <div className={classes.shadow2} >
        <button className={classes.loginbtn} onClick={handleGoogleLogin} > Login </button>
      {userData ? userData.displayName : null}
        </div>
        
    )
}
export default LoginButton