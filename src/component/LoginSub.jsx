import React from 'react';
import BannerImg from '../img/Banner2.png'
import Wrap from './Wrap';
import classes from "./LoginSub.module.css"
import LoginButton from './LoginButton';




const LoginSub = () => {
  return (
  <Wrap>
<img className={classes.LoginBanner} src={BannerImg}/>
<LoginButton/>
  </Wrap>
  );
};

export default LoginSub;
