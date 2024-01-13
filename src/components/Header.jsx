import React from "react";

const Header = () => {
  return (
    <div id="main">
      <a href="#">UniSpace</a>
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#activities">Activities</a>
        <a href="#services">Services</a>
        <a href="#programmes">Programmes</a>
        <a href="#resources">Resources</a>
        <a href="#engageWithUs">Engage with Us</a>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
