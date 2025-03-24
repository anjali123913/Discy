import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-900 text-white p-10 text-center">
        <h1 className="text-3xl font-bold">Share & Grow the World's Knowledge!</h1>
        <p className="mt-2 text-gray-300">
          We want to connect people with knowledge to those who need it.
        </p>
        <a href="
        SignUp">
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Create A New Account</button>
      </a>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold">Recent Questions</h2>
            <div className="bg-white p-4 shadow rounded-md mt-4">
              <h3 className="text-blue-600 font-semibold">Is this statement correct?</h3>
              <p className="text-gray-700">Understanding verb tenses in different languages.</p>
              <div className="flex justify-between mt-2 text-gray-500 text-sm">
                <span>1k votes</span>
                <span>21 questions</span>
                <span>74 answers</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Statistics</h2>
            <div className="bg-white p-4 shadow rounded-md mt-4">
              <p><strong>Questions:</strong> 21</p>
              <p><strong>Answers:</strong> 74</p>
              <p><strong>Best Answers:</strong> 18</p>
              <p><strong>Users:</strong> 157</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;