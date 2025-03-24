import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* About Content */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Our mission is to share and grow the world’s knowledge.
        </h1>
        <p className="mt-4 text-gray-700">
          Discy's mission is to share and grow the world’s knowledge. A vast amount of the knowledge that would be valuable to many people is currently only available to a few—either locked in people’s heads or only accessible to select groups. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
        </p>
        <p className="mt-4 text-gray-700">
          The potential of this is huge. If we can execute our mission, we’re going to make a big impact on the world. We just need to get a smart group of people together that can get us there.
        </p>
        
        {/* Video Section */}
        <div className="mt-6 flex justify-center">
          <iframe
            className="rounded-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
