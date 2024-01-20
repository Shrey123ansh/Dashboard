import React from "react";
import classes from "../Events/cards.module.css";

export default function HighlightCard(props) {
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
      <h2 className={classes.heading}>{props.tedx[0].category}</h2>
      <div className={classes.container}>
        {props.tedx.map((event) => (
          <div className={classes.card} key={event.id}>
            <div className={classes.img_container}>s
              <img src={event.img} />
            </div>
            <div className={classes.card_details}>
              <h2>{event.title}</h2>
              <h3>{event.subtitle}</h3>
              <p>{event.description}</p>
              {/* <Link to={link} state={{ eventName: eventName,eventDate: eventDate, eventDetailedDesc: eventDetailedDesc, eventImage:eventImage, price:price, venue:venue, duration, rules, contacts}} className={classes.mlink}>View Details</Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
