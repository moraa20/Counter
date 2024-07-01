import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <p>Current count: {count}</p>
            <button className="counter-button" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="counter-button" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;