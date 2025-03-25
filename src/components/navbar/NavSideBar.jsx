import React from "react";
import { FaLock } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
const navLinks = [
  {
    to: "/",
    menuItem: "Home",
  },
  {
    to: "/about-us",
    menuItem: "About Us",
  },
  {
    to: "/blog",
    menuItem: "Blog",
  },
  {
    to: "/contact-us",
    menuItem: "Contact Us",
  },
];
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
      <ul className="flex flex-col gap-1 p-6 mt-10">
        {navLinks?.map((menu) => {
          return (
            <li
              key={menu.menuItem}
              className={`${
                theme === "light"
                  ? "hover:text-gray-800 hover:bg-gray-200"
                  : "hover:text-gray-200 hover:bg-gray-800"
              } cursor-pointer py-2 px-4 rounded-md`}
            >
              <Link to={menu.to}>{menu.menuItem}</Link>
            </li>
          );
        })}
      </ul>
      {/* Lock Icon for Login */}
      <div
        className={`absolute bottom-3 left-7 flex items-center gap-2 cursor-pointer ${
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
