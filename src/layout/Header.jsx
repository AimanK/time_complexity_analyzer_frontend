import React, { useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
      <header className="bg-slate-900 shadow-md border border-cyan-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <nav className="hidden md:flex flex-1 justify-evenly ">
              <a href="#home" className="pr-8 font-serif font-black text-cyan-200 no-underline hover:text-cyan-100 hover:no-underline">Big O-tter</a>
              <a href="#home" className="pl-5 font-bold text-cyan-300 no-underline hover:text-cyan-200 hover:no-underline">Home</a>
              <a href="#time-complexities" className="font-bold text-cyan-300 no-underline hover:text-cyan-200 hover:no-underline">Time Complexities</a>
              <a href="#faq" className="font-bold text-cyan-300 no-underline hover:text-cyan-200 hover:no-underline">FAQs</a>
              <a href="#about" className="font-bold text-cyan-300 no-underline hover:text-cyan-200  hover:no-underline">About</a>
            </nav>
            <div className="">
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none" 
                onClick={toggleTheme}
              >
                Toggle to {theme === 'light' ? 'dark' : 'light'} mode
              </button>
            </div>
        </div>
      </header>
  );
}

export default Header;