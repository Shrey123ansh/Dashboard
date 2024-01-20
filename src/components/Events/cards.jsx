import React from "react";
import classes from "./cards.module.css";
const cards = (props) => {
  return (
    <> 
    
    <div className={classes.category} style={{color:"white"}}>{props.tedx[0].category}</div>
    <div className={classes.container}>
      {props.tedx.map((event) => (
        <div className={classes.card} key={event.id}>
          <div className={classes.img_container}>
            <img src={event.img} />
          </div>
          <div className={classes.card_details}>
            <h3>{event.title}</h3>
            <h3>{event.subtitle}</h3>
            <p>{event.description}</p>
            {/* <Link to={link} state={{ eventName: eventName,eventDate: eventDate, eventDetailedDesc: eventDetailedDesc, eventImage:eventImage, price:price, venue:venue, duration, rules, contacts}} className={classes.mlink}>View Details</Link> */}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default cards;
