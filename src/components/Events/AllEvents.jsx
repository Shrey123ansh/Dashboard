import React from 'react'
import Ev1s from "./EventCard";
import classes from './cards.module.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Cards from './cards';
import {tedx1,tedx2,tedx3,tedx4,tedx5} from "../../assets/data/tedxEvents.js";
import Horizontal from '../Horizontal';
import FlipCard from './FlipCard';
const AllEvents = () => {
  return (
    <div>
      {/* <Horizontal/> */}
      <h2 className={classes.title } id="Edition 5.0">Edition 5.0</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <FlipCard id="tedx5" tedx={tedx5} /> </ScrollAnimation>


      {/* <Horizontal/> */}
      <h2 className={classes.title } id="Edition 4.0">Edition 4.0</h2>
      <ScrollAnimation animateIn="animate__fadeInLeft"> <FlipCard id="tedx4" tedx={tedx4}/> </ScrollAnimation>


      {/* <Horizontal/> */}
      <h2 className={classes.title } id="Edition 3.0">Edition 3.0</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <FlipCard id="tedx3" tedx={tedx3}/> </ScrollAnimation>


      {/* <Horizontal/> */}
      <h2 className={classes.title } id="Edition 2.0">Edition 2.0</h2>
      <ScrollAnimation animateIn="animate__fadeInLeft"> <FlipCard id="tedx2" tedx={tedx2}/> </ScrollAnimation>


      {/* <Horizontal/> */}
      <h2 className={classes.title } id="Edition 1.0">Edition 1.0</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <FlipCard id="tedx1" tedx={tedx1}/> </ScrollAnimation>


      {/* <Horizontal/> */}
    </div>
  )
}

export default AllEvents