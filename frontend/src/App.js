import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SupplicationCounter from "./components/SupplicationCounter";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/supplication-counter" element={<SupplicationCounter />} />
            </Routes>
        </Router>
    );
}

export default App;