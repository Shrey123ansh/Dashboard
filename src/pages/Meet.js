import React from 'react'
import Navbar from '../components/Navbar';
import Loader2 from '../components/Loader';
import FooterNew from '../components/FooterNew';
import MainComponent from '../components/Xperience/MainComponent';
import { useState } from 'react';
import { useEffect } from 'react';


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
    <Navbar color={"true"}/>
    <MainComponent />
    
    <FooterNew />

    </>

  )
}
