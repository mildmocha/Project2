import Box from "./Box";
import Wrap from "./Wrap";
import MainImg from "../img/25701.jpg";
import Login from "./Login";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Link } from "react-router-dom";

import BgWrap from "./BgWrap";
import LoginCurrent from "./LoginCurrent";
import QuizBoard from "./QuizBoard";
import StartQuiz from "./StartQuiz";

function Main() {
  

  const isLogin = LoginCurrent();
  return (
    <>
      <Wrap>
        <img className="mainImg" src={MainImg} />
        
        <Link to="/StartQuiz">
          
          <Box text="START" Menu />
        </Link>
        <Box text="BOARD" Menu />

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
    
    </>
  );
}

export default Main;
