import React from "react";
import { useEffect, useState } from "react";
import Loader2 from '../components/Loader';
import Footer from "../components/footer.js";
import HeroSection from "../components/HeroSection.js";
import Navbar from "../components/Navbar";
import Para from "../components/parabody.js";
import Carousel from "../components/carousel";
import Header from "../components/About/header";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import FooterNew from "../components/FooterNew.jsx";

import Team from "../components/Events/teams.jsx";

import {team,curation,design,epr,smp,webdev} from "../assets/data/tedxteam2.js"
import Horizontal from "../components/Horizontal"



export default function About() {
  const [loading ,setLoading]=useState(false);

useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },1500)
},[])


if(loading){
  return (
    <Loader2 />
  )
}
else 
  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar color={"true"} />
      {/* <HeroSection /> */}
      {/* <Para/> */}
      
      <Header />
      {/* <ScrollAnimation animateIn="animate__flipInY"> */}
        <h2 style={{color:"white",fontSize:"6rem"}}>TEAM</h2>
      {/* </ScrollAnimation> */}

      <Team/>

      <Horizontal/>
      
      <FooterNew />
      
      {/* <Footer/> */}
    </div>
  );
}
