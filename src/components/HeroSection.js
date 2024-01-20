import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button.js";

const HeroSection = () => {

 
  return (
    <Wrapper>
      <div className=" jj grid grid-two-column ">
        <div className="section-hero-image">
          <picture>
            <img src="https://th.bing.com/th/id/OIP.LxzLbw6yw1T1a5K9efaU4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="hero image" className="hero-img " />
          </picture>
        </div>
        <div className="data">
          <p className="det">Speaker</p>
          <h1 className="det2">James De carlio</h1>
          <p className="det">
            Professor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligence
          
          </p><br></br><br></br><p className="det3">Professor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligenceProfessor of Brain and Cognitive Science,MIT ,Director at MIT quest for intelligence</p>

          <Button className="btnn ">
           Details 
          </Button>
        </div>
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

export default HeroSection;
