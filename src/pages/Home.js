import React from 'react'
import Navbar from '../components/Navbar';
import Component1 from '../components/Home/Component1';
import Component2 from '../components/Home/Component2';
import Countdown from '../components/countdown.js';
import Carousel from '../components/carousel';
import Slider from '../components/slider';
import DropMail from "../components/Home/DropMail"
import Horizontal from "../components/Horizontal"
import FooterNew from '../components/FooterNew';
import Cards from "../components/Events/cards.jsx"
import {talks,stories,circles} from "../assets/data/highlights.js"
import Particle from "../components/Particle";
import { useState } from 'react';
import { useEffect } from 'react';
import Loader2 from '../components/Loader';


export default function Home() {

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
else{
  return (
    <>
    <Particle style={{zIndex:"-9999"}}/>
    <div style={{backgroundColor: 'black'}}><Navbar color={"true"}/>
    <Component1/>
    
    {/* <Horizontal/> */}
    <Countdown/>
    {/* <Horizontal/> */}
    <h2 style={{marginBottom:"5rem",fontSize:"5rem",color:"white"}}>Highlights</h2><Cards tedx={circles}/><Cards tedx={talks}/><Cards tedx={stories}/>
    {/* <Horizontal/> */}
    <DropMail/>
    {/* <Horizontal/> */}
    <Slider/>
    {/* <Component2/> */}
    {/* <Horizontal style={{marginBottom:"0px"}}/> */}
    <FooterNew/>
  
    {/* <Footer/> */} 

</div>
</>

  


 
);
}

  
}
