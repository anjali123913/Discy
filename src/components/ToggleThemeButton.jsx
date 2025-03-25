import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaToggleOn ,FaToggleOff} from "react-icons/fa";



const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2"
    >
      {theme === "light" ? <FaToggleOn size={28} className="text-xl text-gray-900"/> : <FaToggleOff size={28} className="text-xl"/>}
    </button>
  );
};

export default ThemeToggleButton;
