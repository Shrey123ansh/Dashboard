import React from 'react'
import  "../assets/styles/form2.css"
const form2 = () => {

    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches


const next = () => {
    console.log("next");
   document.getElementById("first").style.display = "none";
   document.getElementById("second").style.display = "none";
   document.getElementById("third").style.display = "none";
   document.getElementById("second").style.display = "block";
};


  return (
    <div className="main">
     
     <div className="containerForm">

    <div className="particle">wW</div>


    <div className="form">

<form id="msform">

  <ul id="progressbar">
    <li class="active">Account Setup</li>
    <li>Social Profiles</li>
    <li>Personal Details</li>
  </ul>

  <fieldset id="first">
    <h2 class="fs-title">Create your account</h2>
    <h3 class="fs-subtitle">This is step 1</h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="password" name="cpass" placeholder="Confirm Password" />
    <input type="button" name="next" class="next action-button" value="Next" onClick={next}/>
  </fieldset>
  <fieldset id="second">
    <h2 class="fs-title">Social Profiles</h2>
    <h3 class="fs-subtitle">Your presence on the social network</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="button" name="next" class="next action-button" value="Next" onClick={next}/>
  </fieldset>
  <fieldset id="third">
    <h2 class="fs-title">Personal Details</h2>
    <h3 class="fs-subtitle">We will never sell it</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" class="previous action-button" value="Previous" />
    <input type="submit" name="submit" class="submit action-button" value="Submit" />
  </fieldset>
</form>
     </div>
      </div>

     </div> 
  )
}

export default form2