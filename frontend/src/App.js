import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SupplicationCounter from "./components/SupplicationCounter";
import DailyInvocationReminder from "./components/DailyInvocationReminder";
import PrayerTracker from "./components/PrayerTracker";
import IslamicQuiz from "./components/IslamicQuiz";
import BeginnerQuiz from "./components/BeginnerQuiz"
import IntermediateQuiz from "./components/IntermediateQuiz"
import AdvancedQuiz from "./components/AdvancedQuiz"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/supplication-counter" element={<SupplicationCounter />} />
                <Route path="/daily-dua-reminder" element={<DailyInvocationReminder />} />
                <Route path="/prayer-tracker" element={<PrayerTracker />} />
                <Route path="/islamic-quiz" element={<IslamicQuiz />} />
                <Route path="/islamic-quiz/beginner" element={<BeginnerQuiz />} />
                <Route path="/islamic-quiz/intermediate" element={<IntermediateQuiz />} />
                <Route path="/islamic-quiz/advanced" element={<AdvancedQuiz />} />
            </Routes>
        </Router>
    );
}

export default App;