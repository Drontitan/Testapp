import React, { useState } from "react";
import "./Questins.css";


const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "1. New York", isCorrect: false },
      { answerText: "2. London", isCorrect: false },
      { answerText: "3. Paris", isCorrect: true },
      { answerText: "4. Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
   const [score, setScore] = useState(0);
  
 const handleAnswerOptionClick = (isCorrect) => {
   document.getElementById("answer-section").style.color = "yellow";
   if (isCorrect) {
     setScore(score + 1);
    }
  };
  const nextoption=()=>{
    const nextQuestion = currentQuestion + 1;
     
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
  
  }
  const previousoption=()=>{
    const nextQuestion = currentQuestion + 1;
   
      if (nextQuestion > 0) {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion > -1) {
          setCurrentQuestion(prevQuestion);
        } else {
        }
      }
    
 }
    const submitoption= () => {
         const nextQuestion = currentQuestion + 1;
         if (nextQuestion ===questions.length) {
             setShowScore(true);
         }
    };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div class="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                id="answer-section"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="nextbutton">
            <button onClick={nextoption}>next</button>
          </div>
          <div id="prevbutton">
            <button onClick={previousoption}>previous</button>
          </div>
          <div className="submitbutton">
            <button onClick={submitoption}>submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
