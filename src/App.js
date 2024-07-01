import React from 'react';
import Counter from './components/Counter';
import DataFetching from './components/DataFetching';
import { ThemeProvider } from './components/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import InputComponent from './components/InputComponent';
import './App.css';
import './styles.css';

function App() {
  return (

    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Hooks Showcase</h1>
          <Counter />
          <DataFetching />
          <ThemedComponent />
          <InputComponent />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
