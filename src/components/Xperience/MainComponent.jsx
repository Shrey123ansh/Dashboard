import React from "react";
import { Data } from "../../assets/data/Xperience";
import classes from "../../assets/styles/quoteDiv.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Quotes from "./Quotes";

export default function MainComponent() {
  return (
    <div className={classes["parent-container"]}>
      <div className={classes["main-container"]}>
        <ScrollAnimation animateIn="animate__flipInY">
          <div className={classes["container-left"]}>
            <h1 className={classes["sub-heading"]}>
              A THRILLING EVENING OF LEARNING GROWTH AND IDEAS
            </h1>
          </div>
        </ScrollAnimation>

        <div className={classes["container-right"]}>
        <ScrollAnimation animateIn="animate__flipInY">
            <img
              src="https://images.unsplash.com/photo-1544509538-ae815ae18e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
              style={{ height: "89%", width: "78%" }}
            />
          </ScrollAnimation>
        </div>
      </div>

      <Quotes data={Data} />
    </div>
  );
}
