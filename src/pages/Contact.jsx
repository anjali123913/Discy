import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <p className="mt-4 text-gray-700 text-center">
          We understand the importance of communication. Feel free to contact us for any questions or services. Please provide a detailed explanation of your problem.
        </p>
        <form className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-2 rounded-md w-full" />
            <input type="email" placeholder="Email" className="border p-2 rounded-md w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Phone" className="border p-2 rounded-md w-full" />
            <input type="text" placeholder="Subject" className="border p-2 rounded-md w-full" />
          </div>
          <textarea placeholder="Your Message" className="border p-2 rounded-md w-full mt-4 h-32"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
