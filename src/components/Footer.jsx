import { FaFacebookF, FaLinkedinIn, FaRss } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      } py-10 mt-10`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-start space-y-4">
            <Link to={"/"}>
              <div className="flex items-center gap-2 text-xl font-semibold text-blue-500">
                <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                <span className="italic">Discy</span>
              </div>
            </Link>
            <p
              className={`${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } text-md`}
            >
              Discy is a social questions & answers engine that will help you
              establish your community and connect with others.
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul
              className={`mt-2 space-y-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <li>
                <a href="#" className="hover:text-blue-500">
                  Meet The Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Stuff */}
          <div>
            <h3 className="text-lg font-semibold">Legal Stuff</h3>
            <ul
              className={`mt-2 space-y-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <ul
              className={`mt-2 space-y-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <li>
                <a href="#" className="hover:text-blue-500">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Support
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-2 mt-4">
              <a
                href="#"
                className="hover:bg-gray-800 bg-blue-600 text-white p-2 rounded-full"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 bg-blue-600 text-white p-2 rounded-full"
                title="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 bg-blue-600 text-white p-2 rounded-full"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="hover:bg-gray-800 bg-blue-600 text-white p-2 rounded-full"
                title="Feed"
              >
                <FaRss />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className={`mt-8 text-center ${
          theme === "light" ? "text-gray-600" : "text-gray-500"
        } border-t-[0.5px]`}
      >
      <p>&copy; {new Date().getFullYear()} Discy. All Rights Reserved</p>
        <p>
          With Love by{" "}
          <a href="#" className="text-blue-400 hover:underline">
            2code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
