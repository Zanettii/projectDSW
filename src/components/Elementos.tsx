"use client";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(false); 
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark"); 
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)} 
      className="px-4 py-2 bg-primary text-text-title rounded "
      
    >
      {isDarkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default ThemeSwitcher;