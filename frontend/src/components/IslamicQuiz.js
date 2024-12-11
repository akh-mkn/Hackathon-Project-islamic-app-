
import React from "react";
import { Link } from "react-router-dom";
import "./IslamicQuiz.css"; // Optional for future styling

function IslamicQuiz() {
  return (
    <div className="islamic-quiz-container">
      <h1>Islamic Quiz</h1>
      <p>Select a level to start the quiz:</p>

      {/* Beginner Level */}
      <div className="quiz-level">
        <img
          src="https://s4.ezgif.com/tmp/ezgif-4-422c8c34ff.jpg" // Replace with an actual image URL
          alt="Beginner Level"
          className="level-image"
        />
        <br />
        <Link to="/islamic-quiz/beginner">
          <button className="level-button">Beginner</button>
        </Link>
      </div>

      {/* Intermediate Level */}
      <div className="quiz-level">
        <img
          src="https://s4.ezgif.com/tmp/ezgif-4-57b0bb8a51.jpg" // Replace with an actual image URL
          alt="Intermediate Level"
          className="level-image"
        />
        <br />
        <Link to="/islamic-quiz/intermediate">
          <button className="level-button">Intermediate</button>
        </Link>
      </div>

      {/* Advanced Level */}
      <div className="quiz-level">
        <img
          src="https://s4.ezgif.com/tmp/ezgif-4-b30ce16b68.jpg" // Replace with an actual image URL
          alt="Advanced Level"
          className="level-image"
        />
        <br />
        <Link to="/islamic-quiz/advanced">
          <button className="level-button">Advanced</button>
        </Link>
      </div>
    </div>
  );
}

export default IslamicQuiz;
