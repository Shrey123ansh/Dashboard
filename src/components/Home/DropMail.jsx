import React from 'react'
import "../../assets/styles/dropMail.css"
import { useState } from "react";
import validator from "validator";
import axios from "axios";

const DropMail = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    
    const [errname, seterrname] = useState("");
    const [erremail, seterremail] = useState("");
    
    const [msg, setmsg] = useState("");
    const formSubmission = async ()  => {
        
        if (validator.isEmail(email) && name!== "") {
            
            seterrname("");
            seterremail("");

            // const res = await axios.post("http://www.localhost:5000/api/dropMail" , {email , name});
            const res = await axios.post("https://156.67.210.178:25000/api/api/dropMail" , {email , name});

             if(res.status === 200 || res.status === 202)
             {
                setmsg(res.data.message);
             }
             else{
                setmsg("server down");
             }
          } else {
            setmsg("");
            if(name === "") seterrname("Please enter your name"); 
            else seterrname("");
          if(!validator.isEmail(email))  seterremail("Please enter a valid email");
          else seterremail("");
          }
    }
  return (
    <div>

<section id="contact" className="contact section-bg" style={{background: "black"}}>

    <div className="row container-mail">

        <div className="dropbox">
            <div className="squarea">
                <h1>Drop Your Mail</h1>
            </div>

        </div>

        <div className="form">
            <h1 style={{marginBottom:"2px",color:"white"}}>BE THE FIRST TO GET UPDATES ON <span style={{color:"red"}}>TEDx</span> NITW</h1>

            <div >
                <div className="form-row">
                    <div className="form-data">
                        <input type="text" name="name" className="" id="name" placeholder="Your Name" data-rule="minlen:4"
                         data-msg="Please enter at least 4 chars" onChange={(e) => setname(e.target.value)}/>
                        <div id="name" style={{fontSize:"1.5rem" , color :"red"}}>{errname}</div>
                    </div>
                    <div className="form-data">
                        <input type="text" className="" name="email" id="email" placeholder="Your Email" data-rule="email" 
                        data-msg="Please enter a valid email" onChange={(e) => setemail(e.target.value)}/>
                        <div id="email" style={{fontSize:"1.5rem" , color :"red"}}>{erremail}</div>
                    </div>
                </div>

                <div style={{fontSize:"2rem" , color :"red"}}>{msg}</div>
                <button  className="btn1" onClick={formSubmission}>Submit</button>
            </div>

            {/* <h1 className="heading mt-4" style={{color:"white"}}>THANK YOU </h1> */}

        </div>

    </div>


</section>


    </div>
  )
}

export default DropMail