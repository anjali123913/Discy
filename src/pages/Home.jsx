import React from "react";
import LeftSidebar from "./home/layout/LeftSidebar";
import MainHome from "./home/MainHome";
import RightSideBar from "./home/layout/RightSideBar";

const Home = () => {
  return (
    <div className="flex">
    <div className="lg:flex hidden">
    <LeftSidebar/>
    </div>
      <MainHome/>
      <RightSideBar/>
    </div>
  );
};

export default Home;