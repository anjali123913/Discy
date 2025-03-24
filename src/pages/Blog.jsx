import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Organizational and company success on Discy",
    image: "https://via.placeholder.com/600x400",
    description: "We want to create a better business and employee tool.",
    author: "Admin",
    date: "March 24, 2025",
  },
  {
    id: 2,
    title: "Defining quality on Discy Q&A – what a helpful answer looks like",
    image: "https://via.placeholder.com/600x400",
    description: "Understanding quality answers in a knowledge-sharing platform.",
    author: "Admin",
    date: "March 23, 2025",
  },
  {
    id: 3,
    title: "Introducing Keyboard Shortcuts, our fast lane",
    image: "https://via.placeholder.com/600x400",
    description: "How keyboard shortcuts can improve efficiency.",
    author: "Admin",
    date: "March 22, 2025",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg mb-6 p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.description}</p>
            <div className="text-gray-500 text-sm mt-2">
              <span>{post.date} • {post.author}</span>
            </div>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
