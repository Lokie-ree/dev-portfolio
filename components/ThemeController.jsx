"use client";

import React, { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeController = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="hidden"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <span className="swap-off">
      <BiSun className="h-8 w-8 text-yellow-500 transition-transform duration-200 hover:scale-125 hover:rotate-12" />
      </span>
      <span className="swap-on">
      <BiMoon className="h-8 w-8 text-purple-500 transition-transform duration-200 hover:scale-125 hover:-rotate-12" />

      </span>
    </label>
  );
};

export default ThemeController;
