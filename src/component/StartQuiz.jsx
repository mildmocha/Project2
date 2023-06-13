import Back from "./BACK"
import BgWrap from "./BgWrap"
import QuizBoard from "./QuizBoard"
import classes from "./StartQuiz.module.css"
import BannerImg from '../img/Banner2.png'
import Timer from "./Timer"
import React, {useState,useRef} from "react"
import RIGHT from "../img/RIGHT.png"

const StartQuiz = () =>{
  
    const [timerKey, setTimerKey] = useState(0);

    const [questions, setQuestions] = useState([
        {
          question: 'What is the capital of France?',
          answer: 'Paris',
          id: 1
        },
        {
          question: 'Which planet is known as the "Red Planet"?',
          answer: 'Mars',
          id: 2
        },
        // Add more questions here...
      ]);

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
    
  const handleShowResult = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setScore(score + 1);
    }

    setShowResult(true);
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
<BgWrap >
    <img className={classes.logo} src={BannerImg}/>
    <QuizBoard>
        {
}
        {currentQuestion.question}
    </QuizBoard>
    <input className={classes.answer} placeholder="정답" value={userAnswer} onChange={handleAnswerChange} onKeyDown={handleKeyDown} ></input>
    <button className={classes.right} onClick={handleNextQuestion} disabled={userAnswer.trim()}>
        <img src= {RIGHT}></img>
      </button>
    <Timer onTimeUp={handleNextQuestion} timeLimit={3} key={timerKey}></Timer>
    <Back A/>
</BgWrap>
    )
}

export default StartQuiz