import React from "react";
import { FaFacebookF, FaTimes, FaLinkedinIn, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-xl font-bold">Discy</h2>
          <p className="text-gray-400 mt-2">
            Discy is a social questions & Answers Engine that will help you
            establish your community and connect with other people.
          </p>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Meet The Team</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Stuff */}
        <div>
          <h3 className="text-lg font-semibold">Legal Stuff</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Help & Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Help</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Knowledge Base</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTimes />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaRss />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Discy. All Rights Reserved</p>
        <p>With Love by <a href="#" className="text-blue-400 hover:underline">2code</a></p>
      </div>
    </footer>
  );
};

export default Footer;