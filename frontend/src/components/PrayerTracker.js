import React, { useState, useEffect } from 'react';
import './PrayerTracker.css';

function PrayerTracker() {
    // Fetches  saved state from localStorage, or uses the default state which is unchecked format
    const getInitialPrayers = () => {
        const savedPrayers = localStorage.getItem('prayers');
        return savedPrayers
            ? JSON.parse(savedPrayers)
            : [
                  { name: 'Fajr', completed: false },
                  { name: 'Duhr', completed: false },
                  { name: 'Asr', completed: false },
                  { name: 'Maghrib', completed: false },
                  { name: 'Isha', completed: false },
              ];
    };

    const [prayers, setPrayers] = useState(getInitialPrayers);

    // toggle commpletion status
    const togglePrayer = (index) => {
        const updatedPrayers = prayers.map((prayer, i) => {
            if (i === index) {
                return { ...prayer, completed: !prayer.completed };
            }
            return prayer;
        });
        setPrayers(updatedPrayers);
    };

    // Saves state to localStorage whenever prayers change
    useEffect(() => {
        localStorage.setItem('prayers', JSON.stringify(prayers));
    }, [prayers]);

    // Function which resest prayers at midnight back to default state 
    useEffect(() => {
        const now = new Date();
        const timeUntilMidnight =
            new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

        const timer = setTimeout(() => {
            setPrayers([
                { name: 'Fajr', completed: false },
                { name: 'Duhr', completed: false },
                { name: 'Asr', completed: false },
                { name: 'Maghrib', completed: false },
                { name: 'Isha', completed: false },
            ]);
            localStorage.removeItem('prayers'); // Clears localStorage
        }, timeUntilMidnight);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="prayer-tracker-container">
            <h2>Prayer Tracker</h2>
            <ul>
                {prayers.map((prayer, index) => (
                    <li key={index} className={`prayer-item ${prayer.completed ? 'completed' : ''}`}>
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
            <p id = "explain"> Muslims pray 5 times a day: Fajr is the prayer before sunrise. Duhr is the prayer performed at mid-day. Asr is the prayer performed at late afternoon. Maghrib is performed in the evening, when the sun finally sets. And last, but not least, Isha is done during the night.</p>
            <img src="/prayer-animation.gif" alt="Prayer Animation" style={{ width: "200px", margin: "10px auto", display: "block" }} />
        </div>
    );
}

export default PrayerTracker;