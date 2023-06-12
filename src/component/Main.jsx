import Box from "./Box";
import Wrap from "./Wrap";
import MainImg from "../img/25701.jpg";
import Login from "./Login";
import SignIn from "./SignIn"
import {
    BrowserRouter as Router,
    
    Link
  } from "react-router-dom";
import BgWrap from "./BgWrap";
import LoginCurrent from "./LoginCurrent";
function Main() {
  
const isLogin = LoginCurrent();
    return(
        <>
<Wrap>
        <img className="mainImg" src={MainImg} />
<LoginCurrent></LoginCurrent>
        <Box text="START" Menu />
        <Box text="BOARD" Menu />

        <div className="log-sign">
          {isLogin ? (
             
              <SignIn /> ) : (
          <Link to ="/LoginSub"><Login />
          </Link>) 
}
        </div>
      </Wrap>
      <BgWrap>

      </BgWrap>
      </>
    );
}


export default Main