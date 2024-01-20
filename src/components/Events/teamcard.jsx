import React from 'react'
import "./profilecards.css";
import { FaFacebook, faHome,faTentArrowLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa/index.esm';
const Card = (props) => {
 
  return (

   <div class="image-area">
{props.card.map( (event) => (
	<div class="img-wrapper" key={event.id}>
           <img  src={event.img} alt="" />
          <h2>{event.title}<br></br><span style={{color:"black"}}>{event.position}</span></h2>
          
          <ul>
				<li><a href={event.facebookid}><FaFacebookF/></a></li>
				<li><a href={event.instagramid}><FaInstagram/></a></li>
				<li><a href={event.twitterid}><FaTwitter/></a></li>
				<li><a href={event.linkedinid}><FaLinkedin/></a></li>
			</ul>
         
      
	</div>
    ))}
   
    </div>

  )
}

export default Card