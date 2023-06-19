import Back from "./BACK";
import BgWrap from "./BgWrap";
import QuizBoard from "./QuizBoard";
import classes from "./StartQuiz.module.css";
import BannerImg from "../img/Banner2.png";
import Timer from "./Timer";
import React, { useState, useRef, useEffect } from "react";
import RIGHT from "../img/RIGHT.png";
import Wrap from "./Wrap";
import Box from "./Box";

const StartQuiz = () => {
  const [timerKey, setTimerKey] = useState(0);

  const [questions, setQuestions] = useState([
    {
      question: "프랑스의 수도는 어디인가요?",
      answer: "파리",
      id: 1,
    },
    {
      question: "어떤 행성이 '빨간 행성'으로 알려져 있나요?",
      answer: "화성",
      id: 2,
    },
    {
      question: "세계에서 가장 큰 바다는 무엇인가요?",
      answer: "태평양",
      id: 3,
    },
    {
      question: "화학 원소 산소의 기호는 무엇인가요?",
      answer: "O",
      id: 4,
    },
    {
      question: "모나리자를 그린 화가는 누구인가요?",
      answer: "레오나르도 다 빈치",
      id: 5,
    },
    {
      question: "영화 '아바타'의 감독은 누구인가요?",
      answer: "제임스 카메론",
      id: 6,
    },
    {
      question: "세계에서 가장 큰 대륙은 무엇인가요?",
      answer: "아시아",
      id: 7,
    },
    {
      question: "신문을 발행하는 사람을 무엇이라고 하나요?",
      answer: "기자",
      id: 8,
    },
    {
      question: "카카오의 창업자는 누구인가요?",
      answer: "김범수",
      id: 9,
    },
    {
      question: "세계에서 가장 큰 도시는 어디인가요?",
      answer: "도쿄",
      id: 10,
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
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
      <Wrap>
        <div>
          <h2>Quiz Result</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      </Wrap>
    );
  }

  if (currentQuestionIndex >= questions.length || currentQuestionIndex >= 5) {
    return (
      <Wrap>
        <div className={classes.result }>
          <h2  >GAME OVER</h2>
          <p className={classes.score}>Your Score: {score} / 5</p>
          <button onClick={restartQuiz}><Box text='Restart Quiz'></Box></button>
        </div>
      </Wrap>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleNextQuestion();
    }
  };

  return (
    <Wrap>
      <BgWrap>
        <img className={classes.logo} src={BannerImg}/>
        <QuizBoard>
          <p>점수: {score} / 5 </p>
          {currentQuestion.question}
          <Timer onTimeUp={handleNextQuestion} timeLimit={10} key={timerKey}></Timer>
        </QuizBoard>
        <div className={classes.answerWrap}>
          <input className={classes.answer} placeholder="정답" value={userAnswer} onChange={handleAnswerChange} onKeyDown={handleKeyDown} ></input>
          <button className={classes.right} onClick={handleNextQuestion} disabled={userAnswer.trim()}>
            <img src={RIGHT} alt="right"></img>
          </button>
        </div>
        <Back A/>
      </BgWrap>
    </Wrap>
  );
};

export default StartQuiz;