import React, { useState } from "react";

const SignIn = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-1/2 flex">
        {/* Left Side - Image Section */}
        <div className="w-1/2 bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p className="mt-2 text-sm">Login to our social questions & answers engine to ask questions, answer people’s questions & connect with others.</p>
          <button className="bg-black text-white px-4 py-2 mt-4 rounded-md">Sign Up Here</button>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-1/2 p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">&times;</button>
          <h3 className="text-xl font-semibold mb-4">Login</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Username or Email *</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter username or email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password *</label>
              <input type="password" className="w-full p-2 border rounded-md" placeholder="Enter password" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700">Remember Me</label>
              </div>
              <a href="#" className="text-blue-600 text-sm">Forgot Password?</a>
            </div>
            <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
