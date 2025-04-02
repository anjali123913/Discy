// src/components/TabMenu.jsx
import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("Recent Questions");

  const tabs = [
    "Recent Questions",
    "Most Answered",
    "Bump Question",
    "Answers",
    "Most Visited",
  ];

  return (
    <div className="w-full border-b-[0.5px] border-gray-100">
      <div className="flex space-x-6  overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm font-medium ${
              activeTab === tab ? "text-white" : "hover:text-gray-400"
            } transition-all py-6`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-white rounded-full"></span>
            )}
          </button>
        ))}

        {/* More Options */}
        <button className="text-gray-400 hover:text-white">
          <FaEllipsisH />
        </button>
      </div>

      {/* Active Tab Indicator */}
      <div className="relative">
        <div className="w-full border-b border-gray-600"></div>
      </div>
    </div>
  );
};

export default TabMenu;
