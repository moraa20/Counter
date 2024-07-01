import React, { useState, useMemo } from 'react';

const FactorialCalculator = ({ number }) => {
    const calculateFactorial = (n) => {
        if (n === 0 || n === 1) return 1;
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };

    const factorial = useMemo(() => calculateFactorial(number), [number]);

    return (
        <div>
            <h2>Factorial of {number}:</h2>
            <p>{factorial}</p>
        </div>
    );
};

export default FactorialCalculator;
