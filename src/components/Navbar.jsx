import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = (props) => {
  const [navVisible, setNavVisible] = useState(false);
  const [color, setColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener("scroll", handleScroll);

  window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });

  const iconClickHandler = () => {
    navVisible ? setNavVisible(false) : setNavVisible(true);
  };

  return (
    <div className="nav">
      <div className={color || props.color == "true" ? "nav nav-bg" : "nav"}>
        <div className="logo">
        <Link to="/"><img src="https://s3.amazonaws.com/hr-assets/0/1677433269-f77fc842d3-logo.png" alt="Logo " /></Link>
        </div>
        <div
          className={`icon1 ${navVisible ? "toggle" : ""}`}
          onClick={iconClickHandler}
        >
          <div
            className={`${color || props.color == "true" ? "line2" : "line1"}`}
          ></div>
          <div
            className={`${color || props.color == "true" ? "line2" : "line1"}`}
          ></div>
          <div
            className={`${color || props.color == "true" ? "line2" : "line1"}`}
          ></div>
        </div>
        <ul className={`nav-links ${navVisible ? "open" : ""}`}>
          <li className={`${navVisible ? "fade" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${navVisible ? "fade" : ""}`}>
            <Link to="/events">Events</Link>
          </li>
          {/* <li className={`${navVisible ? "fade" : ""}`}>
            <Link to="/experience">Experience</Link>
          </li> */}
          <li className={`${navVisible ? "fade" : ""}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${navVisible ? "fade" : ""}`}>
            <button className="login-button" href="#">
             <Link to="/registration" style={{color:"white"}}>Buy Tickets</Link>
            </button>
          </li>
        </ul>
      </div>
      <div class="scroll-indicator-container">
        <div class="scroll-indicator-bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
