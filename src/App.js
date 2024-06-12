import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './layout/Header';
import ComplexityInfoBox from './layout/ComplexityInfoBox';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const [code, setCode] = useState('');


  return (
    <div class="bg-gray-900" className={`app ${theme}`}>
      <Header />
      <h1>Time Complexity Analyzer</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
      />
      <ComplexityInfoBox />
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}

export default App;