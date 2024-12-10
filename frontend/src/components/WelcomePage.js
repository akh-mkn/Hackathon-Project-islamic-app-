import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Islamic Multi-Feature App</h1>
            <p>Select a feature below:</p>
            <div>
                <Link to="/supplication-counter">
                    <button style={{ margin: "10px" }}>Supplication Counter</button>
                </Link>
                <Link to="/daily-dua-reminder">
                    <button style={{ margin: "10px" }}>Daily Dua Reminder</button>
                </Link>
                {/* Add more buttons as you implement features */}
            </div>
        </div>
    );
}

export default WelcomePage;