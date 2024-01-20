import React from "react";
import "../../assets/styles/header.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Horizontal from "../Horizontal"
const header = () => {
  return (
    <div className="containe">
        {/* <div className="about">About Us</div> */}
      {/* <div className="images-container">
        <img src="https://s3.amazonaws.com/hr-assets/0/1672314586-7cbd3282d4-12.jpg"></img>
      </div> */}
      <Horizontal/>
      <div className="aboutTed">
      {/* <ScrollAnimation animateIn="animate__flipInY" > */}
      <h1 className="ted">TED</h1>
      {/* </ScrollAnimation> */}
        <div className="container2">
      <div className="container2-left">
        <div className="wrapper1">
        <ScrollAnimation animateIn="animate__fadeInRight">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCM11PY1ORxnRCE1rVLEXaP1u8VtIKKpXekQ&usqp=CAU"
            alt=""
          />
           </ScrollAnimation> 
        </div>
      </div>

      <div className="container2-right">
        <div className="wrapper1">
          <div className="content1">
          <ScrollAnimation animateIn="animate__fadeInLeft" >
          <p>
          TED is a global community, welcoming people from every discipline and culture who seek a deeper
           understanding of the world. TED believes passionately in the power of ideas to change attitudes, 
           lives and, ultimately, the world. On TED.com, we're building a clearinghouse of free knowledge 
           from the world's most inspired thinkers — and a community of curious souls to engage with ideas
            and each other, both online and at TED and TEDx events around the world, all year long.
          </p>
        </ScrollAnimation> 
        </div>
        </div>
      </div>
    </div>
      </div>

      <hr style={{  border:"none",
  height: "20px",
 	width: "90%",
	height: "50px",
	marginTop: "0",
	borderBottom: "1px solid white",
	boxShadow: "0 20px 20px -20px white",
  margin: "-50px auto 10px" }}/>
      <div className="aboutTed">
      {/* <ScrollAnimation animateIn="animate__flipInY" > */}
      <h1 className="ted"> <span style={{color:"red"}}>TEDX</span> NITW</h1>
      {/* </ScrollAnimation>  */}
        <div className="container2">
      <div className="container2-left">
        <div className="wrapper1">
        <ScrollAnimation animateIn="animate__fadeInLeft">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKOBrGvBQD7gI5GBgOwL7EX1ktRhyRg2Cpw&usqp=CAU"
            alt=""
          />
           </ScrollAnimation> 
        </div>
      </div>

      <div className="container2-right">
        <div className="wrapper1">
          <div className="content1">
          <ScrollAnimation animateIn="animate__fadeInRight" >
          <p>
          TEDxNITW is the independently organized event operated under the license obtained from 
          TED but is based on guidelines laid down by TED. It is conducted and hosted by NITW. 
          Our mission is to revolutionize the way people converse and broadcast ideas by speakers 
          from various walks of life. We aim to inspire, motivate, and above all, instigate 
          conversation which adds to everyday life.
          </p>
        </ScrollAnimation> 
        </div>
        </div>
      </div>
    </div>
      </div>
      <hr style={{  border:"none",
  height: "20px",
 	width: "90%",
	height: "50px",
	marginTop: "0",
	borderBottom: "1px solid white",
	boxShadow: "0 20px 20px -20px white",
  margin: "-50px auto 10px" }}/>
    </div>
  );
};

export default header;
