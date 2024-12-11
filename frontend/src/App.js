import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SupplicationCounter from "./components/SupplicationCounter";
import DailyInvocationReminder from "./components/DailyInvocationReminder";
import PrayerTracker from "./components/PrayerTracker";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/supplication-counter" element={<SupplicationCounter />} />
                <Route path="/daily-dua-reminder" element={<DailyInvocationReminder />} />
                <Route path="/prayer-tracker" element={<PrayerTracker />} />
            </Routes>
        </Router>
    );
}

export default App;