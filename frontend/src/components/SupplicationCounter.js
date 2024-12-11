import React, { useState } from "react";
import './SupplicationCounter.css';

function SupplicationCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1); //Incements count by 1 
    };

    const resetCount = () => {
        setCount(0); //Resets count to 0 
    };

    return (
        <div>
            <h2 id ="Sup-Counter-1">Supplication Counter</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default SupplicationCounter