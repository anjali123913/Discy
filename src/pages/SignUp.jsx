import React, { useState } from "react";

const SignUp = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-700 text-white p-8 hidden md:flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <p className="mt-2 text-sm">Join our community to ask and answer questions.</p>
          <button 
            className="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            onClick={onSwitchToLogin}
          >
            Have an Account? Sign In
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <button className="float-right text-gray-600" onClick={onClose}>✖</button>
          <h2 className="text-xl font-semibold text-center mb-4">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-sm">I'm not a robot</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                className="mr-2"
                onChange={handleChange}
                required
              />
              <span className="text-sm">I agree to the Terms and Privacy Policy.</span>
            </div>
            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
