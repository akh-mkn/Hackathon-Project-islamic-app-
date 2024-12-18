
import React from "react";
import { Link } from "react-router-dom";
import "./IslamicQuiz.css"; 

function IslamicQuiz() {
  return (
    <div className="islamic-quiz-container">
      <h1>Islamic Quiz</h1>
      <p>Select a level to start the quiz:</p>

      {/* Beginner Level */}
      <div className="quiz-level">
        <img
          src="https://i.pinimg.com/236x/f5/12/6f/f5126f7a8952aac2645e08f405e0ec6f.jpg" 
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
          src="https://i.pinimg.com/236x/2d/a2/98/2da298bd495d5859c290ad59843a7770.jpg" 
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
          src="https://i.pinimg.com/236x/2e/ce/73/2ece73a76ce3279ea9e0a5047ffef27e.jpg" 
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
