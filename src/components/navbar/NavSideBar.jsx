import React from "react";
import { FaLock } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const NavSideBar = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 right-4 text-2xl ${
          theme === "light" ? "text-gray-600" : "text-white"
        }`}
      >
        &times;
      </button>

      {/* Sidebar Links */}
      <ul className="flex flex-col gap-6 p-6 mt-10">
        <li
          className={`${
            theme === "light"
              ? "hover:text-blue-600 hover:bg-gray-200"
              : "hover:text-blue-400 hover:bg-gray-800"
          } cursor-pointer py-2 px-4 rounded-md`}
        >
          Home
        </li>
        <li
          className={`${
            theme === "light"
              ? "hover:text-blue-600 hover:bg-gray-200"
              : "hover:text-blue-400 hover:bg-gray-800"
          } cursor-pointer py-2 px-4 rounded-md`}
        >
          About Us
        </li>
        <li
          className={`${
            theme === "light"
              ? "hover:text-blue-600 hover:bg-gray-200"
              : "hover:text-blue-400 hover:bg-gray-800"
          } cursor-pointer py-2 px-4 rounded-md`}
        >
          Blog
        </li>
        <li
          className={`${
            theme === "light"
              ? "hover:text-blue-600 hover:bg-gray-200"
              : "hover:text-blue-400 hover:bg-gray-800"
          } cursor-pointer py-2 px-4 rounded-md`}
        >
          Contact Us
        </li>
      </ul>

      {/* Lock Icon for Login */}
      <div
        className={`absolute bottom-6 left-6 flex items-center gap-2 cursor-pointer ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <FaLock />
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default NavSideBar;
