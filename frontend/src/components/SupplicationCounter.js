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
            
            <p id ="Small-Cap">As you say a supplication of your choice, click the increment button. If you wish to start back at zero, click the reset button.</p>
            <p id= "Small-Cap">“And remember God abundantly, so that you may be successful” (62:10)</p>
            <ul id= "Small-Cap-two">Examples of supplications:
                <li>"Glory be to God"</li>
                <li>"God is the greatest"</li>
                <li>"Praise be to God.</li>

            </ul>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
            <br></br>
            <br></br>
            <img src="/SupCounter.gif" alt="Animated GIF" style={{ width: "800px", borderRadius: "10px" }} />

            
        </div>
    );
}

export default SupplicationCounter