import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Payment = () => {
  const navigate = useNavigate();
    const success = localStorage.getItem('success');

    
useEffect(() => {
  const redirect = setTimeout(() => {
    localStorage.setItem('success',"false");
    navigate("/");
  }, 4000);
  return () => clearTimeout(redirect);
}, [])
  return (
    <div>

       <h2 style={{color:"white"}}>
         {success==="true" ? 'Payment Successful. Your ticket has been sent to your mail' : 'Payment unsuccessful'} 
       </h2>

    </div>
  )
}

export default Payment