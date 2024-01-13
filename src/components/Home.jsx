import React from "react";
import { BsChevronDown } from "react-icons/bs";
import videoBg from "../assets/videoBg.mp4";

const Home = () => {
  return (
    <div id="home">
      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <h2>Welcome</h2>
        <p>This is Our Solar System</p>
      </div>

      <BsChevronDown />
    </div>
  );
};

export default Home;
