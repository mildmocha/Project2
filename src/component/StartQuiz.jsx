import Back from "./BACK"
import BgWrap from "./BgWrap"
import QuizBoard from "./QuizBoard"
import classes from "./StartQuiz.module.css"
import BannerImg from '../img/Banner2.png'
import Timer from "./Timer"
import React, {useState,useRef,useEffect} from "react"
import RIGHT from "../img/RIGHT.png"
import Wrap from "./Wrap"

const StartQuiz = () =>{
  
    const [timerKey, setTimerKey] = useState(0);

    const [questions, setQuestions] = useState([
      {
        question: '프랑스의 수도는 어디인가요?',
        answer: '파리',
        id: 1
      },
      {
        question: '어떤 행성이 "빨간 행성"으로 알려져 있나요?',
        answer: '화성',
        id: 2
      },
      {
        question: '세계에서 가장 큰 바다는 무엇인가요?',
        answer: '태평양',
        id: 3
      },
      {
        question: '화학 원소 산소의 기호는 무엇인가요?',
        answer: 'O',
        id: 4
      },
      {
        question: '모나리자를 그린 화가는 누구인가요?',
        answer: '레오나르도 다 빈치',
        id: 5
      },
    ]);
    const shuffleQuestions = () => {
      setQuestions((prevQuestions) => {
        const shuffledQuestions = [...prevQuestions];
        shuffledQuestions.sort(() => Math.random() - 0.5);
        return shuffledQuestions;
      });
    };
  
    useEffect(() => {
      shuffleQuestions();
    }, []);
  
        // Add more questions here...
      

      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [userAnswer, setUserAnswer] = useState('');
      const [score, setScore] = useState(0);
      const [showResult, setShowResult] = useState(false);
      
  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setScore(score + 1);
    }
    
    setUserAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimerKey(timerKey + 1);
    
  };
    
  

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setTimerKey(0);
  };

  if (showResult) {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleNextQuestion();
    }
    
  };
 
  


    return(
      <Wrap>
<BgWrap >
  
    <img className={classes.logo} src={BannerImg}/>
   
    <QuizBoard>
      
    <p>점수:{score} </p>
        {currentQuestion.question}
        
        <Timer onTimeUp={handleNextQuestion} timeLimit={999} key={timerKey}></Timer>
        
    </QuizBoard>
    <div className={classes.answerWrap} >
    <input className={classes.answer} placeholder="정답" value={userAnswer} onChange={handleAnswerChange} onKeyDown={handleKeyDown} ></input>
    
    <button className={classes.right} onClick={handleNextQuestion} disabled={userAnswer.trim()}>
        <img src= {RIGHT}></img>
      </button>
      </div>
      
      
    <Back A/>
    
</BgWrap>
</Wrap>
    )
}

export default StartQuiz