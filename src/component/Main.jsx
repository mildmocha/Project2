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
function Main() {
    return(
        <>
<Wrap>
        <img className="mainImg" src={MainImg} />

        <Box text="START" Menu />
        <Box text="BOARD" Menu />

        <div className="log-sign">
          <Link to ="/LoginSub"><Login />
          </Link>
          <SignIn />
        </div>
      </Wrap>
      <BgWrap>

      </BgWrap>
      </>
    );
}


export default Main