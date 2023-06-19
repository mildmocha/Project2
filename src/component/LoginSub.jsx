import React, { useState } from 'react';
import BannerImg from '../img/Banner2.png';
import Wrap from './Wrap';
import classes from "./LoginSub.module.css";
import LoginButton from './LoginButton';
import Logout from './Logout';
import LoginCurrent from './LoginCurrent';
import Back from './BACK';
import UserProfile from './UserProfile'; // 수정된 부분
import Box from './Box';


const LoginSub = () => {
  const isLogin = LoginCurrent();
  console.log('2', isLogin);

  return (
    <>
    <Back />
    <Wrap>
      <div className={classes.WrapInner} >
     
      <LoginCurrent />
      <img className={classes.LoginBanner} src={BannerImg} />

      <UserProfile /> {/* 수정된 부분 */}

      {isLogin ? (
      
          
        
        <Logout />
      ) : (
        <LoginButton />
      )}
      </div>
    </Wrap>
    </>
  );
};

export default LoginSub;