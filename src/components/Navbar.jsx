import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-blue-400">Discy</div>
        <ul className="ml-10 flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
          <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Type Search Words"
          className="p-2 text-black rounded-md"
        />
        {/* Use Link for navigation */}
        <Link to="/signin">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
        </Link>
        <Link to="/sigup">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md border border-white">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
