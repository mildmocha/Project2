import React, {useState} from 'react';
import BannerImg from '../img/Banner2.png'
import Wrap from './Wrap';
import classes from "./LoginSub.module.css"
import LoginButton from './LoginButton';
import Logout from './Logout';
import LoginCurrent from './LoginCurrent';
import Back from './BACK';
import UserProfile from './userProfile';







const LoginSub = () => {
  

const isLogin = LoginCurrent();
console.log ('2',isLogin)

  return (
  <Wrap>
    <Back></Back>
    <LoginCurrent/>
<img className={classes.LoginBanner} src={BannerImg}/>

<UserProfile/>

{isLogin ? (
<Logout/>
) : (
<LoginButton />
)}
  </Wrap>
  );
};

export default LoginSub;