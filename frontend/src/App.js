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
import PrayerTimes from "./components/PrayerTimes"
import AboutMe from "./components/AboutMe";
import AppInfo from "./components/AppInfo";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    return (
        <Router>
            <div>
            <MusicPlayer />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/supplication-counter" element={<SupplicationCounter />} />
                <Route path="/daily-dua-reminder" element={<DailyInvocationReminder />} />
                <Route path="/prayer-tracker" element={<PrayerTracker />} />
                <Route path="/islamic-quiz" element={<IslamicQuiz />} />
                <Route path="/islamic-quiz/beginner" element={<BeginnerQuiz />} />
                <Route path="/islamic-quiz/intermediate" element={<IntermediateQuiz />} />
                <Route path="/islamic-quiz/advanced" element={<AdvancedQuiz />} />
                <Route path="/prayer-times" element={<PrayerTimes />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/app-info" element={<AppInfo />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
            <Footer />
            </div>
        </Router>
    );
}

export default App;