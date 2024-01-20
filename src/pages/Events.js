import React from 'react'
import Loader2 from '../components/Loader';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Para from '../components/parabody';
import Component1 from '../components/Home/Component1';
import Timeline from "../components/Timeline"
import Horizontal from "../components/Horizontal"
import AllEvents from "../components/Events/AllEvents"
import FooterNew from '../components/FooterNew';
import Ev1s from '../components/Events/EventCard';
import { useState } from 'react';
import { useEffect } from 'react';
import Particle from "../components/Particle";
export default function Meet() {

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
    <>
    <Particle style={{zIndex:"-999"}}/>
    <div style={{backgroundColor: 'black'}}>
    <Navbar color={"true"}/>
    {/* <Component1 /> */}
    {/* <Horizontal/> */}
    {/* <Carousel/> */}
    <Timeline/>
    <AllEvents/>
    {/* <Horizontal/> */}
    <hr style={{  border:"none",
  height: "20px",
 	width: "90%",
	height: "50px",
	marginTop: "0",
	borderBottom: "1px solid white",
	boxShadow: "0 20px 20px -20px white",
  margin: "-50px auto 10px" }}/>
    <FooterNew />
    {/* <Footer/> */}
    </div>
    </>
  )
}
