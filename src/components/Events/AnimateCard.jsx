import React from 'react'
import  "./AnimateCard.css";
const AnimateCard = (props) => {
  return (
    <div className="mai" >
 {props.card.map( (event) => (
<div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src=""
          />
          <img
            class="img img1"
            src={event.img}
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">Alma</div>
      <div class="title">Product Manager</div>
    </div>
       ))}

    </div>
  )
}

export default AnimateCard