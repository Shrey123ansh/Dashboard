import React from "react";
import styled from "styled-components";
import { Button } from "./Button.js";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa/index.esm.js";

const Footer = () => {
  return (
    <Wrapper>
      
     

      <footer>
        <div className="container3 grid grid-four-column flex">
          <div className="footer-about">
           
           <img src="https://tedxnitw.com/logo.png"></img><br></br><hr></hr><br></br>
            <h3 class="details">INFORMATION</h3>
           
            <a href="">
            <h3>TedxNITW 2022
            </h3></a>
           <a href="">
           <h3> Speakers
           </h3> </a>
            <a href="">
            <h3> Organizer
            </h3></a>    </div>

          <div className="footer-about">
          <br></br> <br></br> <br></br><br></br><br></br><hr></hr><br></br>
            <h3 class="details">Previous Event</h3>
           
            <a href="">
            <h3>Fall 2021
            </h3></a>
           <a href="">
           <h3>Covid 19
           </h3> </a>
            <a href="">
            <h3>Spring 21
            </h3></a>    </div>

         
          <div className="footer-social">
            <br></br>
          <h3 >  An independently Organized TED Event </h3><hr></hr><br></br>
         
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href=""
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          
        </div>

        
        <div className="footer-bottom--section">
          <hr />
          <div className="container3 grid grid-two-column" style={{height:"0.3rem", margin:"2px 2px"}}>
            <p>
              @{new Date().getFullYear()} TEDxNITW. All Rights Reserved
            </p>
           
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  flex{
    display:flex;
  }
  footer {
    padding: 10rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social{
      flex:1;
    }
    .footer-about{
      flex:1;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 20%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 2rem;
      hr {
        margin-bottom: 1px;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
hr{
  color:transparent;
}
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
