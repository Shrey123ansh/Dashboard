import React from "react";
import { useEffect } from "react";
import classes from "../assets/styles/Footer.module.css";
import jQuery from "jquery";
import $ from "jquery";
import fetchOffset from "jquery";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import "../assets/styles/rocket.css";

export default function FooterNew() {
  
  useEffect(() => {
    // use jquery here if you must, this way the component is loaded
    //and the dom matches whats in react (or should)
    jQuery(window).on("scroll", function () {
      if (jQuery(window).scrollTop() < 50) {
        jQuery("#rocketmeluncur").slideUp(500);
      } else {
        jQuery("#rocketmeluncur").slideDown(500);
      }
      var ftrocketmeluncur = jQuery("#ft")[0]
        ? jQuery("#ft")[0]
        : jQuery(document.body)[0];
      var scrolltoprocketmeluncur = $("rocketmeluncur");
      var viewPortHeightrocketmeluncur = parseInt(
        document.documentElement.clientHeight
      );
      var scrollHeightrocketmeluncur = parseInt(
        document.body.getBoundingClientRect().top
      );
      var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
      var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
      if (basewrocketmeluncur < 1000) {
        var leftrocketmeluncur = parseInt(
          fetchOffset(ftrocketmeluncur)["left"]
        );
        leftrocketmeluncur =
          leftrocketmeluncur < swrocketmeluncur
            ? leftrocketmeluncur * 2 - swrocketmeluncur
            : leftrocketmeluncur;
        scrolltoprocketmeluncur.style.left =
          basewrocketmeluncur + leftrocketmeluncur + "px";
      } else {
        scrolltoprocketmeluncur.style.left = "auto";
        scrolltoprocketmeluncur.style.right = "10px";
      }
    });

    jQuery("#rocketmeluncur").on("click", function () {
      jQuery("html, body").animate(
        { scrollTop: "0px", display: "none" },
        {
          duration: 600,
          easing: "linear",
        }
      );

      var self = this;
      this.className += " " + "launchrocket";
      setTimeout(function () {
        self.className = "showrocket";
      }, 800);
    });
  }, []);

  return (
    <>
      {/* <div className={classes.line}></div> */}

      <a href="javascript:void(0);" id="rocketmeluncur" class="showrocket">
        <i></i>
      </a>
      <footer className={classes.footer}>
        <div className={classes["footer-container"]}>
          <div className={classes["footer-row"]}>
            <div className={classes["footer-left"]}>
              <img src="https://s3.amazonaws.com/hr-assets/0/1677433269-f77fc842d3-logo.png" alt="Logo" />
              <h5>National Institute of Technology</h5>
              <h5>Warangal, Telangana</h5>
              <h6>Phone: +91 9381402059</h6>
              <h7>Email: events@TedxNITW.com</h7>
            </div>

            <div className={classes["footer-col"]} >
              <h4>
                Useful links
                <div className={classes.underline}>
                  <span></span>
                </div>
              </h4>
              <ul>
                <li>
                  <a>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Link to="/events">Events</Link>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <Link to="/experience">Experience</Link>
                  </a>
                </li> */}
                <li>
                  <a href="#">
                    <Link to="/about">About</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes["footer-col"]}>
              <h4>
                Follow Us
                <div className={classes.underline}>
                  <span></span>
                </div>
              </h4>
              <ul>
                <li className={classes.fbText} >
                  <a href="https://www.facebook.com/TEDxNITW/">
                    Facebook
                  </a>
                </li>
                <li className={classes.twitterText}>
                  <a href="https://twitter.com/tedxnitw">
                    Twitter
                  </a>
                </li>
                <li className={classes.instaText}>
                  <a href="https://www.instagram.com/tedxnitw/?hl=en">
                    Instagram
                  </a>
                </li>
                <li className={classes.linkedinText}>
                  <a href="https://www.linkedin.com/company/tedxnitw/mycompany/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className={classes["footer-col"]}>
              <h4>
                Follow us
                <div className={classes.underline}>
                  <span></span>
                </div>
              </h4>
              <div className={classes["footer-social-links"]}>
                <a
                  className={classes.fb}
                  href="https://www.facebook.com/TEDxNITW/"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a
                  className={classes.twitter}
                  href="https://twitter.com/tedxnitw"
                >
                  <i>
                    <FaTwitterSquare />
                  </i>
                </a>
                <a
                  className={classes.instagram}
                  href="https://www.instagram.com/tedxnitw/?hl=en"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
                <a
                  className={classes.linkedin}
                  href="https://www.linkedin.com/company/tedxnitw/mycompany/"
                >
                  <i>
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
      <div className={classes.line}></div>
      <div className={classes["footer-bottom"]}>
        <div className={classes["footer-bottom-text"]}>
          <h5>
            © Copyright
            <span
              className={`${classes["footer-bottom-red"]} ${classes["footer-bottom-bold"]}`}
            >
              TEDx
            </span>
            <span className={classes["footer-bottom-bold"]}>NITW</span> . All
            Rights Reserved
          </h5>
        </div>
      </div>
    </>
  );
}
