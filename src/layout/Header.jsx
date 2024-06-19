import React, { useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Time Complexities</a>
          <a href="#">FAQs</a>
          <a href="#">About</a>
        </nav>
        <button
          onClick={toggleTheme}
        >
          Toggle to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </header>
    </div>
  );
}

export default Header;