import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemedComponent.css';

const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`container ${theme}`}>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;
