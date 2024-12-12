import React, { useState } from "react";
import "./Quiz.css"; 

function IntermediateQuiz() {
  // Question Bank
  const intermediateQuestions = [
    {
      question: "Which city is known as the birthplace of Prophet Muhammad (PBUH)?",
      options: ["Medina", "Mecca", "Jerusalem", "Baghdad"],
      correctAnswer: "Mecca",
    },
    {
      question: "What is the Islamic month of fasting called?",
      options: ["Shaban", "Ramadan", "Muharram", "Safar"],
      correctAnswer: "Ramadan",
    },
    {
      question: "How many chapters (Surahs) are in the Quran?",
      options: ["112", "114", "116", "120"],
      correctAnswer: "114",
    },
  ];

  // State Setup
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Navigation Logic
  const handleNextQuestion = () => {
    if (selectedAnswer === intermediateQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < intermediateQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Display Current Question
  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <h2>Intermediate Quiz</h2>
          <p>{intermediateQuestions[currentQuestionIndex].question}</p>
          <div>
            {intermediateQuestions[currentQuestionIndex].options.map((option, index) => (
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
          <p>Your score: {score} / {intermediateQuestions.length}</p>
        </div>
      )}
    </div>
  );
}

export default IntermediateQuiz;