import Box from "./Box";
import Wrap from "./Wrap";
import MainImg from "../img/25701.jpg";
import Login from "./Login";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classes from "./Main.module.css"
import mainImg2 from "../img/Banner2.png"
import LoginCurrent from "./LoginCurrent";

function Main() {
  const style1={
  
    Width :'100%'
  }
  const isLogin = LoginCurrent();
  return (
    <main className={classes.Main} style={style1}>
      
      <Wrap>
        <div className={classes.mainwrap} >
      <img src= {MainImg} className='mainImg'/> 
        <img src ={mainImg2} className="mainImg2"/>
        
        {isLogin ? (
             <Link to="/StartQuiz">
          
             <Box text="START" Menu />
           </Link>
          ) : (
            <Link to="/LoginSub">
              <Box text="START" Menu />
            </Link>
          )}
       
        {isLogin ? (
            <Link to="/Board">
            <Box text="BOARD" Menu />
            </Link>
          ) : (
            <Link to="/LoginSub">
             <Box text="BOARD" Menu />
            </Link>
          )}
        
        <div className="log-sign">
          {isLogin ? (
            <SignIn />
          ) : (
            <Link to="/LoginSub">
              <Login />
            </Link>
          )}
        </div>
        </div>
      </Wrap>
    
    </main>
  )
    
}

export default Main;
