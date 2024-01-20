import "../assets/styles/carousel.css"
import $ from 'jquery'
const Carousel=(props)=>{

   
    return(
      <>
      <div style={{marginTop:"20px",marginLeft:"20px",fontSize:"3rem",color:"white"}}>{props.category}</div>
    <section class="cards1">
    {props.team.map((event) => (
    <article class="card card--1">
      
      <div class="card__img"></div>
      <a href="#" class="card_link">
         <div class="card__img--hover"></div>
       </a>
      <div class="card__info">
        <span class="card__category"> Education</span>
        <h3 class="card__title">Discover Yourself</h3>
        <span class="card__by">by <a href="#" class="card__author" title="author">ABC</a></span>
      </div>
    </article>
    ))}
      </section>
      </>
    )}
    export default Carousel;