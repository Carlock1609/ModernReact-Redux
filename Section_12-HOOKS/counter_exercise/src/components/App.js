import React, { useState } from 'react';



export default function App() {
    // activeCount is the current state
    // setActiveCount is how you make changes to the current state
    const [activeCount, setActiveCount] = useState(0)

    // function envoked when clicked
    const onButtonClick = () => {
        // changing current state and setting it.
        setActiveCount(activeCount + 1)
    };

    return (
        <div>
            {/* envoked function when clicked */}
            <button onClick={onButtonClick}>Click Me!</button>
            {/* show current state */}
            <h1>Current Count:{activeCount}</h1>
        </div>
    );
};