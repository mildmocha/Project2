import "./App.css";


import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
  Link,
  Switch
} from "react-router-dom";
import LoginSub from "./component/LoginSub";
import Main from "./component/Main";
import StartQuiz from "./component/StartQuiz";
import Board from "./component/Board";
import Post from './component/Post';
function App() {
  const posts =[];
  return (
    <>
    
    <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Main/>}/>
      </Routes>
      <Routes>
        <Route path="/loginSub" element={<LoginSub />} />
      </Routes>
        <Routes>
          <Route path="/StartQuiz" element={<StartQuiz/> }></Route>
        </Routes>
        <Routes>
          <Route path="/Board" element={<Board/> }></Route>
        </Routes>
        
        <Routes>
        <Route exact path="/Board" component={Board} /> 
        <Route path="/Post/:id" element={<Post posts={posts} />} />
      </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
