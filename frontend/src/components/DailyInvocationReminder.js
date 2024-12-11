import React, { useState } from "react";
import './DailyInvocationReminder.css';

const DailyInvocationReminder = () => {
    //Collection of Invocations
    const duas = [
    "My Lord, forgive me and have mercy upon me.",
    "My Lord, grant us good in this world and good in the Hereafter, and save us from the torment of the Fire.",
    "My Lord, guide me, protect me, and strengthen my faith.",
    "My Lord, make my affairs easy and relieve me of my burdens.",
    "My Lord, grant me knowledge and increase my wisdom.",
    "My Lord, make me among those who remember You often and who are grateful to You.",
    "My Lord, grant me patience and perseverance in times of difficulty.",
    "My Lord, bless me and my family with health, happiness, and faith.",
    "My Lord, protect me from the whispers of the devil and guide me on the straight path.",
    "My Lord, make my heart content with Your decrees and Your blessings.",
    "My Lord, grant me success in all my endeavors and keep me steadfast on Your path.",
    "My Lord, shower Your mercy upon me and forgive my sins.",
    "My Lord, open the doors of goodness for me and close the doors of harm.",
    "My Lord, strengthen my faith and make me among those who are righteous.",
    "My Lord, protect me from harm and evil, and guide me to do what is pleasing to You.",
    ]


 // State to manage the current dua
 const [currentDua, setCurrentDua] = useState("");

 // Function to get a random dua
 const getRandomDua = () => {
   const randomIndex = Math.floor(Math.random() * duas.length);
   setCurrentDua(duas[randomIndex]);
 };

 return (
   <div style={{ textAlign: "center", padding: "20px" }}>
     <h2 id="dua-one">Daily Invocation Reminder</h2>
     <p id="2"style={{ fontSize: "1.5em", margin: "20px 0" }}>{currentDua || "Click below to get a daily invocation."}</p>
     <button id="3" onClick={getRandomDua} style={{ padding: "10px 20px", fontSize: "1em" }}>
       Get Invocation
     </button>
   </div>
 );
};

export default DailyInvocationReminder;