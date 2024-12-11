import React, { useState } from "react";
import './PrayerTracker.css';

function PrayerTracker() {
    // State to track prayers and their completion status
    const [prayers, setPrayers] = useState([
        { name: "Fajr", completed: false },
        { name: "Duhr", completed: false },
        { name: "Asr", completed: false },
        { name: "Maghrib", completed: false },
        { name: "Isha", completed: false },
    ]);

    // Function to toggle completion status
    const togglePrayer = (index) => {
        const updatedPrayers = prayers.map((prayer, i) => {
            if (i === index) {
                return { ...prayer, completed: !prayer.completed };
            }
            return prayer;
        });
        setPrayers(updatedPrayers);
    };

    return (
        <div className="prayer-tracker-container">
            <h2>Prayer Tracker</h2>
            <ul>
                {prayers.map((prayer, index) => (
                    <li key={index} className={`prayer-item ${prayer.completed ? "completed" : ""}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={prayer.completed}
                                onChange={() => togglePrayer(index)}
                            />
                            {prayer.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PrayerTracker;