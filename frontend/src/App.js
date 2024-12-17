import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import Register from "./components/Register";
import Login from "./components/Login";

const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  }; //checks to see if token exists for user 


function App() {
    return (
        <Router>
            <div>
            <MusicPlayer />
            <Routes>
  {/* Protected Routes: Only accessible if the user is authenticated */}
  <Route
    path="/"
    element={isAuthenticated() ? <WelcomePage /> : <Navigate to="/login" />}
  />
  <Route
    path="/supplication-counter"
    element={isAuthenticated() ? <SupplicationCounter /> : <Navigate to="/login" />}
  />
  <Route
    path="/daily-dua-reminder"
    element={isAuthenticated() ? <DailyInvocationReminder /> : <Navigate to="/login" />}
  />
  <Route
    path="/prayer-tracker"
    element={isAuthenticated() ? <PrayerTracker /> : <Navigate to="/login" />}
  />
  <Route
    path="/prayer-times"
    element={isAuthenticated() ? <PrayerTimes /> : <Navigate to="/login" />}
  />
  <Route
    path="/islamic-quiz"
    element={isAuthenticated() ? <IslamicQuiz /> : <Navigate to="/login" />}
  />
  <Route
    path="/islamic-quiz/beginner"
    element={isAuthenticated() ? <BeginnerQuiz /> : <Navigate to="/login" />}
  />
  <Route
    path="/islamic-quiz/intermediate"
    element={isAuthenticated() ? <IntermediateQuiz /> : <Navigate to="/login" />}
  />
  <Route
    path="/islamic-quiz/advanced"
    element={isAuthenticated() ? <AdvancedQuiz /> : <Navigate to="/login" />}
  />
  <Route
    path="/about"
    element={isAuthenticated() ? <AboutMe /> : <Navigate to="/login" />}
  />
  <Route
    path="/app-info"
    element={isAuthenticated() ? <AppInfo /> : <Navigate to="/login" />}
  />
  <Route
    path="/contact-me"
    element={isAuthenticated() ? <ContactMe /> : <Navigate to="/login" />}
  />

  {/* Public Routes: Accessible without authentication */}
  <Route
    path="/register"
    element={!isAuthenticated() ? <Register /> : <Navigate to="/" />}
  />
  <Route
    path="/login"
    element={!isAuthenticated() ? <Login /> : <Navigate to="/" />}
  />

  {/* Catch-All Route: Redirect unknown paths */}
  <Route path="*" element={<Navigate to={isAuthenticated() ? "/" : "/login"} />} />
</Routes>
            <Footer />
            </div>
        </Router>
    );
}

export default App;