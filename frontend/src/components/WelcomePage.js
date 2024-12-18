import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css"; // CSS imported here for card styling
import Header from "./Header"; 

function WelcomePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Welcome message */}
      <div className="welcome-container">
        <h1>Welcome to the Islamic Multi-Feature App.</h1>
        <p>Select a feature below:</p>

        {/* Features container */}
        <div className="features-container">
          {/* Supplication Counter */}
          <div className="card">
            <h3>Supplication Counter</h3>
            <Link to="/supplication-counter">
              <button className="feature-button">Explore</button>
            </Link>
          </div>

          {/* Daily Dua Reminder */}
          <div className="card">
            <h3>Daily Invocation Reminder</h3>
            <Link to="/daily-dua-reminder">
              <button className="feature-button">Explore</button>
            </Link>
          </div>

          {/* Prayer Tracker */}
          <div className="card">
            <h3>Prayer Tracker</h3>
            <Link to="/prayer-tracker">
              <button className="feature-button">Explore</button>
            </Link>
          </div>

          {/* Islamic Quizzes */}
          <div className="card">
            <h3>Islamic Quizzes</h3>
            <Link to="/islamic-quiz">
              <button className="feature-button">Explore</button>
            </Link>
          </div>

          {/* Prayer Times */}
          <div className="card">
            <h3>Prayer Times</h3>
            <Link to="/prayer-times">
              <button className="feature-button">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;