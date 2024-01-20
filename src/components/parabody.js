import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button.js";

const Para = () => {
 
  return (
    <Wrapper>
      <div className=" ok ">
       <center>
<div className="textcenter"><h2>James De Carlio</h2><br></br> <p className="det4">
            Professor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligence
          
          </p><p className="det4">Professor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligence</p>
</div>
       
        
         </center>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Para;
