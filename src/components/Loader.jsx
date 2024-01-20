import React from 'react'
import classes from "../assets/styles/Loader.module.css"
const Loader2 = () => {
  return (
    <div>


<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", backgroundColor: "black"}}>
  
  <span className={classes.loader}></span>

</div>
    </div>
  )
}

export default Loader2