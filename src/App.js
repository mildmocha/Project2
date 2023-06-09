import "./App.css";


import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
  Link
} from "react-router-dom";
import LoginSub from "./component/LoginSub";
import Main from "./component/Main";
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Main/>}/>
      </Routes>
      <Routes>
        <Route path="/loginSub" element={<LoginSub />} />
      </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
