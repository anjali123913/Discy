// src/components/LeftSidebar.jsx
import React from "react";
import { FaHome, FaUsers, FaTags, FaTrophy, FaShoppingCart } from "react-icons/fa";
import { MdOutlineQuestionAnswer, MdGroups, MdHelpOutline } from "react-icons/md";
import { RiCommunityLine, RiAddCircleLine } from "react-icons/ri";
import { BsMegaphone } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";

const LeftSidebar = () => {
  const { theme} = useTheme();

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "#" },
    { name: "Communities", icon: <RiCommunityLine />, link: "#" },
    { name: "Questions", icon: <MdOutlineQuestionAnswer />, link: "#" },
    { name: "Polls", icon: <BsMegaphone />, link: "#" },
    { name: "Groups", icon: <MdGroups />, link: "#" },
    { name: "Add group", icon: <RiAddCircleLine />, link: "#" },
    { name: "Tags", icon: <FaTags />, link: "#" },
    { name: "Badges", icon: <FaTrophy />, link: "#" },
    { name: "Users", icon: <FaUsers />, link: "#" },
    { name: "Help", icon: <MdHelpOutline />, link: "#" },
    { name: "Buy Theme", icon: <FaShoppingCart />, link: "#" },
  ];

  return (
    <div
      className={`h-screen w-64 ${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      } shadow-lg transition-all duration-300`}
    >
      {/* Header and Theme Toggle */}
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Menu
        </h1>
    
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition ${
              theme === "dark"
                ? "hover:bg-gray-700 text-gray-300"
                : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
