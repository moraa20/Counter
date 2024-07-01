import React, { useState } from 'react';

const ClickCounter = ({ onClick }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        onClick();
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>Clicked: {count} times</p>
        </div>
    );
};

export default ClickCounter;
