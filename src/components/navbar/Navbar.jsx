import React, { useState } from "react";
import { FaBars, FaTimes, FaLock, FaSearch } from "react-icons/fa";
import NavSideBar from "./NavSideBar";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Get theme from context
  const [searchTerm, setSearchTerm] = useState("");
  // Toggle Sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Open login page
  const openLogin = () => {
    alert("Open Login Page");
  };

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      alert(`Searching for: ${searchTerm}`);
    } else {
      alert("Please enter search words!");
    }
  };

  return (
    <>
      <nav
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        } px-6 py-4 flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold text-blue-500">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <span className="italic">Discy</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li
            className={`${
              theme === "light" ? "hover:text-blue-600" : "hover:text-blue-800"
            } cursor-pointer py-1 px-2 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300`}
            tabIndex={0} // Make element focusable for keyboard users
          >
            Home
          </li>

          <li
            className={`${
              theme === "light" ? "hover:text-blue-600" : "hover:text-blue-800"
            } cursor-pointer py-1 px-2 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300`}
            tabIndex={0} // Make element focusable for keyboard users
          >
            About Us
          </li>
          <li
            className={`${
              theme === "light" ? "hover:text-blue-600" : "hover:text-blue-800"
            } cursor-pointer py-1 px-2 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300`}
            tabIndex={0} // Make element focusable for keyboard users
          >
            Blog
          </li>
          <li
            className={`${
              theme === "light" ? "hover:text-blue-600" : "hover:text-blue-800"
            } cursor-pointer py-1 px-2 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300`}
            tabIndex={0} // Make element focusable for keyboard users
          >
            Contact Us
          </li>
        </ul>

        {/* Search Bar and Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Type Search Words"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${
                theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-gray-300"
              } px-3 py-2 pr-10 rounded-md text-sm outline-none`}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
            >
              <FaSearch size={18} />
            </button>
          </form>

          <button
            onClick={openLogin}
            className={`${
              theme === "light" ? "text-gray-800" : "text-gray-200"
            }  hover:bg-red-400 rounded py-1 px-2`}
          >
            Sign In
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-gray-400">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleSidebar} className="md:hidden text-gray-400">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <NavSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
