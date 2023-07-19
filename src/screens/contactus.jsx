
import React from "react";
import footer from "../components/footer";

export default function contactus() {
  return (
    <section className="contactus_main">
      <div className="contactus_main-box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
      </div>

      <div className="contactus_main_second">
        <div className="contactus_main_second-head">
          <h1>Contact Us</h1>
        </div>

        <form className="inputs"  action=""  method="">
          <div className="contactus_main_second-form1">
            <input
              type="text"
              placeholder="Name"
              className="contactus_main_second-form1-1"
            />
          </div>
          <div className="contactus_main_second-form1">
            <input
              type="text"
              placeholder="Email-id"
              className="contactus_main_second-form1-1"
            />
          </div>
          <div className="contactus_main_second-form1">
            <input
              type="text"
              placeholder="Message"
              className="contactus_main_second-form1-1"
            />
          </div>
        </form>

       
       <button className="contactus_main_second-form3" >Submit</button>
      </div>

      <div className="contactus_main-pic">
        <img
          classname=""
          src={require("../assets/CallCenter.jpg")}
          alt="callcenter"
        />
      </div>      
    </section>
  );
}
