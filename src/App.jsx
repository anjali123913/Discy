import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { FaEdit, FaPen } from "react-icons/fa";
import { FaUpDown, FaUpLong } from "react-icons/fa6";
import ActionIcons from "./components/ActionIcons";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Theme Toggle Button fixed to bottom-right */}

      <ActionIcons />

      <Footer />
    </Router>
  );
};

export default App;
