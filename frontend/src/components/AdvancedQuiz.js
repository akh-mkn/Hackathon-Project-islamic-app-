import React, { useState } from "react";
import "./Quiz.css"; 

function AdvancedQuiz() {
  // Question Bank
  const advancedQuestions = [
    {
      question: "Which angel is responsible for bringing revelation to the Prophets?",
      options: ["Jibreel (AS)", "Mikail (AS)", "Israfeel (AS)", "Azrael (AS)"],
      correctAnswer: "Jibreel (AS)",
    },
    {
      question: "What is the name of the Prophet Muhammad's (PBUH) mother?",
      options: ["Aminah", "Khadijah", "Fatimah", "Haleemah"],
      correctAnswer: "Aminah",
    },
    {
      question: "Which Surah is known as the 'Heart of the Quran'?",
      options: ["Surah Yaseen", "Surah Rahman", "Surah Mulk", "Surah Fatiha"],
      correctAnswer: "Surah Yaseen",
    },
    {
      question: "How many years did Prophet Muhammad (PBUH) spend in Mecca after receiving prophethood?",
      options: ["13 years", "10 years", "23 years", "7 years"],
      correctAnswer: "13 years",
    },
    {
      question: "Which Prophet is mentioned the most in the Quran?",
      options: ["Prophet Musa (AS)", "Prophet Ibrahim (AS)", "Prophet Isa (AS)", "Prophet Yusuf (AS)"],
      correctAnswer: "Prophet Musa (AS)",
    },
  ];

  // State Setup
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Navigation Logic
  const handleNextQuestion = () => {
    if (selectedAnswer === advancedQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < advancedQuestions.length) {
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
          <h2>Advanced Quiz</h2>
          <p>{advancedQuestions[currentQuestionIndex].question}</p>
          <div>
            {advancedQuestions[currentQuestionIndex].options.map((option, index) => (
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
          <p>Your score: {score} / {advancedQuestions.length}</p>
        </div>
      )}
    </div>
  );
}

export default AdvancedQuiz;