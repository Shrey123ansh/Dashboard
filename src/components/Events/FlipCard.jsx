import React from 'react'
import "./flipcard.css";
const FlipCard = (props) => {
  return (
<div class="box-container">
{props.tedx.map( (event) => (
	<div class="box-item" key={event.id}>
    <div class="flip-box">
    {/* style={{backgroundImage:  `url(${event.img})`}} */}
      <div class="flip-box-front" style={{backgroundImage: `url(${event.img})`}} >
        <div class="inner color-white">
          {/* <img className="imag" src={event.img} alt="" /> */}
          {/* <h3 class="flip-box-header">{event.title}</h3> */}
          {/* <p>{event.subtitle}</p> */}
          {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"></img> */}
        </div>
      </div>
      <div class="flip-box-back" style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uXBbM_2--pylW4SygTL0jOyOieU9crJR1QZEBxuCmXArGrkp1EXXsAIUMcNKhJdA0ak&usqp=CAU')`}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">{event.subtitle}</h3>
          <p>{event.description}</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
    ))}
    </div>

  )
}

export default FlipCard