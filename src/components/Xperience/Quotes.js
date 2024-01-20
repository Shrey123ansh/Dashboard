import React from "react";
import classes from "../../assets/styles/quoteDiv.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Quotes(props) {
  return (
    <>
      {props.data.map((part) => (
        <>
          <div className={classes["main-container"]}>
            <div className={classes["container-left"]}>
              <ScrollAnimation animateIn="animate__fadeInRight">
                <img
                  src={part.img1}
                  alt=""
                  style={{ height: "89%", width: "78%" }}
                />
              </ScrollAnimation>
            </div>
            <div className={classes["container-right"]}>
              <ScrollAnimation animateIn="animate__fadeInLeft">
                <div class={classes.quote}>
                  <blockquote>
                    <p>{part.quote1}</p>
                  </blockquote>
                  <p class={classes.credit}>{part.writer1}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className={classes["main-container"]}>
            <div className={classes["container-left"]}>
              <ScrollAnimation animateIn="animate__fadeInRight">
                <div class={classes.quote}>
                  <blockquote>
                    <p>{part.quote1}</p>
                  </blockquote>
                  <p class={classes.credit}>{part.writer1}</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className={classes["container-right"]}>
              <ScrollAnimation animateIn="animate__fadeInLeft">
                <img
                  src={part.img2}
                  alt=""
                  style={{ height: "89%", width: "78%" }}
                />
              </ScrollAnimation>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
