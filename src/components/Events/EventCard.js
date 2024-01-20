import classes from "../../assets/styles/cards.module.css";
import React from "react";
import Horizontal from "../Horizontal";
export default function Ev1s(props) {
  function reveal() {
    var reveals = document.querySelectorAll(".fade2");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].style.animationName = "fade-right2";
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <h2 className={classes.title} id={props.tedx[0].subtitle}>
        {props.tedx[0].subtitle}
      </h2>
      <div className={classes.cardsEvent}>
        {props.tedx.map((event) => (
          <article className={[classes.card2, classes.fade2]} key={event.id}>
            <header className={classes.card__thumb2}>
              <img src={event.img} />
            </header>

            <div className={classes.card__body2}>
              <h2 className={classes.card__title2}>{event.title}</h2>
              <div className={classes.card__subtitle2}>{event.subtitle}</div>
              <p className={classes.card__description2}>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
