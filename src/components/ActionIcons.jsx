import React, { useState, useEffect } from "react";
import { FaPen, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ToggleThemeButto from "./ToggleThemeButton"
// Dummy authentication check (replace with real auth logic)
const isUserLoggedIn = () => {
  return localStorage.getItem("user") ? true : false;
};

const ActionIcons = () => {
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();

  // Handle scroll visibility
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when clicking up icon
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Pen icon click (check login)
  const handlePenClick = () => {
    if (isUserLoggedIn()) {
      navigate("/contact"); // Redirect to contact page if logged in
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <section className="flex items-center justify-between px-5 fixed bottom-10 left-2 z-50 w-full">
      <ToggleThemeButto />
      <div className="flex items-center justify-center gap-4">
        {/* Pen Icon */}
      <div
        className="p-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition"
        onClick={handlePenClick}
      >
        <FaPen className="text-white text-lg" />
      </div>

      {/* Up Icon (only show when scrolled) */}
      {showScroll && (
        <div
          className="p-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white text-lg" />
        </div>
      )}
      </div>
    </section>
  );
};

export default ActionIcons;
