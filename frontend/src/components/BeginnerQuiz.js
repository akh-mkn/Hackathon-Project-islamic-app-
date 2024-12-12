import React, { useState } from "react";
import "./Quiz.css"; 

function BeginnerQuiz() {
  // Question Bank
  const beginnerQuestions = [
    {
      question: "What is the first pillar of Islam?",
      options: ["Shahada", "Salah", "Zakat", "Hajj"],
      correctAnswer: "Shahada",
    },
    {
      question: "How many times do Muslims pray daily?",
      options: ["3", "5", "7", "None"],
      correctAnswer: "5",
    },
    {
      question: "What is the holy book of Islam called?",
      options: ["Bible", "Torah", "Quran", "Vedas"],
      correctAnswer: "Quran",
    },
  ];

  //State Setup
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  //Navigation Logic
  const handleNextQuestion = () => {
    if (selectedAnswer === beginnerQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < beginnerQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true); // Gives a score out of 3 
    }
  };

  //Display Current Question
  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <h2>Beginner Quiz</h2>
          <p>{beginnerQuestions[currentQuestionIndex].question}</p>
          <div>
            {beginnerQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(option)}
                className={selectedAnswer === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next</button>
        </>
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <p>Your score: {score} / {beginnerQuestions.length}</p>
        </div>
      )}
    </div>
  );
}

export default BeginnerQuiz;