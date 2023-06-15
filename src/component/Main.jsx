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
      <img src= {MainImg} className='mainImg'/> 
        <img src ={mainImg2} className="mainImg2"/>
        <Link to="/StartQuiz">
          
          <Box text="START" Menu />
        </Link>
        <Link to="/Board">
        <Box text="BOARD" Menu />
        </Link>
        <div className="log-sign">
          {isLogin ? (
            <SignIn />
          ) : (
            <Link to="/LoginSub">
              <Login />
            </Link>
          )}
        </div>
      </Wrap>
    
    </main>
  )
    
}

export default Main;
