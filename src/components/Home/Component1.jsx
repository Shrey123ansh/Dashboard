import React from 'react'
import "../../assets/styles/component_1.css";
import Particle from '../Particle';
import Carousel from "./Carousel.jsx"
import { Link } from "react-router-dom";
export default function Component1() {
  return (
    <div classsName="component">
    {/* <Particle> */}
<div className="container">
{/* <div class="gif"></div> */}
<div className="container-left">
      <div className="text-container">
        <h2>What's in your Mind?</h2>
        <p>
        Discover new ideas and perspectives from thought leaders around the world. 
        Join the global conversation on innovation and change with TEDx, where ideas worth spreading come to life.
        </p>
        <div>
        <Link to="/registration" style={{color:"white"}}> <button className="btn2">Buy Tickets</button></Link>
          {/* <button className="btn1" style={{marginLeft:"10px"}}>Learn more</button> */}
        </div>
      </div>
    </div>


    <div className='container-right'>
            {/* <div className="pic-ctn">
                <img
                    src="https://th.bing.com/th/id/OIP.nyFLBYjD207JNHC4hBQBAwHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                    class="pic"
                />
                <img
                    src="https://th.bing.com/th/id/OIP.Aijp3pZNexAkFYWb8jSprQHaF7?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                    class="pic"
                />
                <img src="https://picsum.photos/200/300?t=3" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=4" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=5" alt="" class="pic" />
            </div> */}
            <Carousel/>
        </div>
   </div>
   </div>
  )
}
