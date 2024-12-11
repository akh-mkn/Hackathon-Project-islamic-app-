import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>welcome to the Islamic Multi-Feature App.</h1>
            <p>select a feature below:</p>
            <div>
                <Link to="/supplication-counter">
                    <button style={{ margin: "10px" }}>Supplication Counter</button>
                </Link>
                <Link to="/daily-dua-reminder">
                    <button style={{ margin: "10px" }}>Daily Dua Reminder</button>
                </Link>
                <Link to="/prayer-tracker">
                    <button style={{ margin: "10px" }}>Prayer Tracker</button>
                </Link>
                <Link to="/islamic-quiz">
                    <button style={{ margin: "10px" }}>Islamic Quizzes</button>
                </Link>
                {/* Add more buttons as you implement features */}
            </div>
        </div>
    );
}

export default WelcomePage;