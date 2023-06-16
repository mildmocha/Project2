import React, { useState } from 'react';
import classes from "./LoginButton.module.css";
import { useNavigate } from "react-router-dom";

import { auth } from '../Firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const LoginButton = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // 구글 로그인 설정
    signInWithRedirect(auth, provider) // 팝업을 통한 로그인
      .then((data) => {
        setUserData(data.user); // 사용자 데이터 설정
      
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={classes.shadow2}>
      <button className={classes.loginbtn} onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
    </div>
  );
};

export default LoginButton;