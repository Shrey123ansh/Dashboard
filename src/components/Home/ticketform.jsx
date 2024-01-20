import React from "react";
// import "../assets/styles/form.css";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Particles from 'react-particles-js';
import axios from "axios";
// import Particle from './Particle';
import classes from "../../assets/styles/ticketform.module.css";
import Particle from "../Particle";
// import Razorpay from "Razorpay"
const Ticketform = () => {
  const navigate = useNavigate();
  const [count, setcount] = useState();
  const [tickets, settickets] = useState(100);

  const [noOfTickets, setNoOfTickets] = useState("");

  const handleChange = (event) => {
    let value = event.target.value;
    value = Math.max(0, Number(value));
    value = Math.min(tickets, Number(value));
    if (value !== 0) {
      setcount(value);
      setNoOfTickets(value.toString());
    } else setcount(event.target.placeholder);
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [rollNo, setrollNo] = useState("");

  if (name.length > 0) {
    document.getElementById("nameLabel").style.fontSize = "1.5rem";
    document.getElementById("nameLabel").style.top = "-6px";
  }
  // else if (name.length == 0)
  // {
  //   document.getElementById("nameLabel").style.fontSize = "20px";
  //   document.getElementById("nameLabel").style.top = "50%";
  // }
  if (email.length > 0) {
    document.getElementById("emailLabel").style.fontSize = "1.5rem";
    document.getElementById("emailLabel").style.top = "-6px";
  }
  // else if (email.length == 0)
  // {
  //   document.getElementById("emailLabel").style.fontSize = "20px";
  //   document.getElementById("emailLabel").style.top = "50%";
  // }
  if (phone.length > 0) {
    document.getElementById("phoneLabel").style.fontSize = "1.5rem";
    document.getElementById("phoneLabel").style.top = "-6px";
  }
  // else if (phone.length == 0)
  // {
  //   document.getElementById("phoneLabel").style.fontSize = "20px";
  //   document.getElementById("phoneLabel").style.top = "50%";
  // }
  if (rollNo.length > 0) {
    document.getElementById("rollNoLabel").style.fontSize = "1.5rem";
    document.getElementById("rollNoLabel").style.top = "-6px";
  }
  // else if (rollNo.length == 0)
  // {
  //   document.getElementById("rollNoLabel").style.fontSize = "20px";
  //   document.getElementById("rollNoLabel").style.top = "50%";
  // }
  if (noOfTickets.toString().length > 0) {
    document.getElementById("ticketsLabel").style.fontSize = "1.5rem";
    document.getElementById("ticketsLabel").style.top = "-6px";
  }
  // else if (noOfTickets.toString().length == 0)
  // {
  //   document.getElementById("ticketsLabel").style.fontSize = "20px";
  //   document.getElementById("ticketsLabel").style.top = "50%";
  // }

  useEffect(() => {
    async function fetchdata() {
      // const res = await axios.get("http://www.localhost:5000/api/count");
      const res = await axios.get("https://156.67.210.178:25000/api/api/count")
      if (res.status) {
        settickets(res.data.ticketLeft);
      }
    }
    fetchdata();
  }, []);

  const checkoutHandler = async () => {
    // const {
    //   data: { key },
    // } = await axios.get("http://www.localhost:5000/api/getkey");
    const {
      data: { key },
    } = await axios.get("https://156.67.210.178:25000/api/api/getkey");

    // const {
    //   data: { order },
    // } = await axios.post("http://localhost:5000/api/checkout", {
    //   name,
    //   email,
    //   phone,
    //   rollNo,
    //   count,
    // });
    const {
      data: { order },
    } = await axios.post("https://156.67.210.178:25000/api/api/checkout", {
      name,
      email,
      phone,
      rollNo,
      count,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TEDX NITW",
      description: "Payment Gateway",
      image:
        "data:image/jpeg;base64,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",
      order_id: order.id,
      // callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        email: order.notes.email,
        contact: order.notes.phone,
      },
      handler: async (response) => {
        try {
          response.count = count;
          response.email = email;
          response.rollNo = rollNo;
          response.phone = phone;
          response.name = name;

          // const res = await axios.post(
          //   "http://localhost:5000/api/paymentverification",
          //   response
          // );

          const res = await axios.post(
            "https://156.67.210.178:25000/api/api/paymentverification",
            response
          );
          
          if (res.status === 200) {
            localStorage.setItem("success", "true");
            // redirect("/payment");
            navigate("/payment");
          } else {
            localStorage.setItem("success", "false");
            // redirect("/payment");
            navigate("/payment");
          }
        } catch (e) {
          console.log("error");
        }
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = await new window.Razorpay(options);
    razor.open();
    // var rzp1 = new Razorpay(options);

    // rzp1.on('payment.failed', function (response){
    // console.log(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
    //  });

    //  rzp1.open();
    //  document.getElementById('rzp-button1').onclick = function(e)
    //  {
    //  rzp1.open();
    //  e.preventDefault();
    //   }
  };
  // const inputs = document.querySelectorAll(".input-field");
  // const toggle_btn = document.querySelectorAll(".toggle");
  // const main = document.querySelector("main");
  // const bullets = document.querySelectorAll(".bullets span");
  // const images = document.querySelectorAll(".image");

  // inputs.forEach((inp) => {
  //   inp.addEventListener("focus", () => {
  //     inp.classList.add("active");
  //   });
  //   inp.addEventListener("blur", () => {
  //     if (inp.value != "") return;
  //     inp.classList.remove("active");
  //   });
  // });

  // toggle_btn.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     main.classList.toggle("sign-up-mode");
  //   });
  // });

  // function moveSlider() {
  //   let index = this.dataset.value;

  //   let currentImage = document.querySelector(`.img-${index}`);
  //   images.forEach((img) => img.classList.remove("show"));
  //   currentImage.classList.add("show");

  //   const textSlider = document.querySelector(".teext-group");
  //   textSlider.style.transform = `translateY(${-(index - 1) * 3}rem)`;

  //   bullets.forEach((bull) => bull.classList.remove("active"));
  //   this.classList.add("active");
  // }

  // bullets.forEach((bullet) => {
  //   bullet.addEventListener("click", moveSlider);
  // });

  return (
    <>
      <Particle />
      <main>
        <div className={classes["box"]}>
          <div className={classes["inner-box"]}>
            <div className={classes["forms-wrap"]}>
              <div className={classes["forms"]}>
                {/* <h4 className={classes["head"]}>Tedx NITW</h4> */}

                <div className={classes["heading"]}>
                  <h2>Payment</h2>
                  {/* <h6 class={classes["head2"]}>Book your seat for the most awaited main event </h6> */}
                </div>

                <div className={classes["actual-form"]}>
                  <div className={classes["input-wrap"]}>
                    <input
                      className={classes["input-field"]}
                      name="name"
                      required={true}
                      onChange={(e) => setname(e.target.value)}
                      type="text"
                      // minlength="4"
                      // autocomplete="off"
                    />
                    <label id="nameLabel">Name</label>
                  </div>
                  <div className={classes["input-wrap"]}>
                    <input
                      className={classes["input-field"]}
                      type="email"
                      name="email"
                      required={true}
                      onChange={(e) => setemail(e.target.value)}
                      autocomplete="off"
                    />
                    <label id="emailLabel">Email</label>
                  </div>
                  <div className={classes["input-wrap"]}>
                    <input
                      className={classes["input-field"]}
                      type="number"
                      name="phone"
                      required={true}
                      onChange={(e) => setphone(e.target.value)}
                      minlength="10"
                      autocomplete="off"
                    />
                    <label id="phoneLabel">Phone number</label>
                  </div>{" "}
                  <div className={classes["input-wrap"]}>
                    <input
                      className={classes["input-field"]}
                      type="text"
                      name="rollNo"
                      onChange={(e) => setrollNo(e.target.value)}
                      autocomplete="off"
                    />
                    <label id="rollNoLabel">
                      Roll (Only for NITW students)
                    </label>
                  </div>
                  <div className={classes["input-wrap"]}>
                    <input
                      className={classes["input-field"]}
                      type="number"
                      name="count"
                      value={count}
                      required={true}
                      onChange={handleChange}
                      min="0"
                      autocomplete="off"
                    />
                    <label id="ticketsLabel">No. of tickets</label>
                  </div>
                  <div id={classes.button}>
                    <button
                      className={classes["signin-btn"]}
                      onClick={() => checkoutHandler()}
                    >
                      PAY
                    </button>
                    <span className={classes["rip1"]}></span>
                    <span className={classes["rip2"]}></span>
                  </div>
                  <p className={classes["text"]}>
                    Tickets Left : {tickets} <br />
                    Total amount to be paid :{" "}
                    {count === 0 || isNaN(count) ? 0 : count * 500}
                  </p>
                </div>
              </div>
            </div>

            <div className={classes["carousel"]}>
              <div className={classes["images-wrapper"]}>
                <img
                  src="https://picsum.photos/300/300"
                  className={[
                    classes["image"],
                    classes["show"],
                    classes[" img-1"],
                  ].join(" ")}
                  alt=""
                />
                <img
                  src="https://picsum.photos/310/310"
                  className={[classes["image"], classes[" img-2"]].join(" ")}
                  alt=""
                />
                <img
                  src="https://picsum.photos/320/320"
                  className={[classes["image"], classes[" img-3"]].join(" ")}
                  alt=""
                />
              </div>

              <div className={classes["teext-slider"]}>
                <div className={classes["teext-wrap"]}>
                  <div className={classes["teext-group"]}>
                    <h2>Ted talk like you never seen</h2>
                    <h2>Witness the best</h2>
                    <h2>Grab your seat</h2>
                  </div>
                </div>

                <div className={classes["bullets"]}>
                  <span className={classes["active"]} data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Ticketform;
