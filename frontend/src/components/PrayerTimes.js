import React, { useState, useEffect } from "react";
import './PrayerTimes.css'

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

  // Fetch prayer times
  const fetchPrayerTimes = async (latitude, longitude) => {
    const apiURL = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      if (data.code === 200) {
        setPrayerTimes(data.data.timings);
      } else {
        setError("Failed to fetch prayer times.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching prayer times.");
    }
  };

  // Get user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchPrayerTimes(latitude, longitude);
        },
        (err) => {
          console.error(err);
          setError("Failed to retrieve location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="prayer-times-container">
      <h2>Prayer Times</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          {Object.keys(prayerTimes).length > 0 ? (
            <ul>
              {Object.entries(prayerTimes)
                .filter(([key]) => !["imsak", "midnight", "firstthird", "lastthird"].includes(key.toLowerCase()))
                .map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
            </ul>
          ) : (
            <p>Loading prayer times...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PrayerTimes;