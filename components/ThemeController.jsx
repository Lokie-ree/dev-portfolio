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
      <BiSun className="swap-off h-10 w-10 text-yellow-500" />
      <BiMoon className="swap-on h-10 w-10 text-blue-500" />
    </label>
  );
};

export default ThemeController;
