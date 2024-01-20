import React from 'react'
import './profilecards.css'
import classes from './cards.module.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { team,curation,design,epr,smp,webdev,sponsorship } from '../../assets/data/tedteamdata';

// import AnimateCard from "./AnimateCard.jsx";
import Card from './teamcard';
const Team = () => {
  return (
    <div>
     
        <ScrollAnimation animateIn="animate__fadeInRight"> <Card id="1" card={team} /> </ScrollAnimation>
        {/* <ScrollAnimation animateIn="animate__fadeInRight"> <AnimateCard id="1" card={team} /> </ScrollAnimation> */}

     
      <h2 className={classes.title } id="category">Curation</h2>
      <ScrollAnimation animateIn="animate__fadeInLeft"> <Card id="2" card={curation}/> </ScrollAnimation>


     
      <h2 className={classes.title } id="category">Design</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <Card id="3" card={design}/> </ScrollAnimation>


     
      <h2 className={classes.title } id="category">Webdev</h2>
      <ScrollAnimation animateIn="animate__fadeInLeft"> <Card id="4" card={webdev}/> </ScrollAnimation>


     
      <h2 className={classes.title } id="category">Sponsorship</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <Card id="5" card={sponsorship}/> </ScrollAnimation>


<h2 className={classes.title } id="category">EPR</h2>
      <ScrollAnimation animateIn="animate__fadeInLeft"> <Card id="6" card={epr}/> </ScrollAnimation>


      <h2 className={classes.title } id="category">SM&P</h2>
      <ScrollAnimation animateIn="animate__fadeInRight"> <Card id="7" card={smp}/> </ScrollAnimation>

     
    </div>
  )
}

export default Team