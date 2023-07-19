
import React from "react";
import footer from "../components/footer";

export default function contactus() {
  return (
    <div className="contactus">
      <div className="contactus__c">
        <div className="contactus__c-left">
          <div className="contactus__c-left-box">
            <img src={require("../assets/logo.png")} alt="" srcset="" />
          </div>
        </div>
        <div className="contactus__c-middle">
          <h1>Contact Us</h1>
          <form className="inputs" action="" method="">
            <input
              type="text"
              placeholder="Name"
              className="contactus_main_second-form1-1"
            />
            <input
              type="text"
              placeholder="Email-id"
              className="contactus_main_second-form1-1"
            />

            <label htmlFor="message">Message</label>
            <textarea
              cols={5}
              type="text"
              placeholder="Message"
              className="contactus_main_second-form1-1"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contactus__c-right">
          <img src={require("../assets/CallCenter.jpg")} alt="" />
        </div>

      </div>
      {/* <section className="contactus_main">
        <div className="contactus_main-box">
          <img src={require("../assets/logo.png")} alt="" srcset="" />
        </div>

        <div className="contactus_main_second">
          <div className="contactus_main_second-head">
            <h1>Contact Us</h1>
          </div>

          <form className="inputs" action="" method="">

            <input
              type="text"
              placeholder="Name"
              className="contactus_main_second-form1-1"
            />


            <input
              type="text"
              placeholder="Email-id"
              className="contactus_main_second-form1-1"
            />


            <input
              type="text"
              placeholder="Message"
              className="contactus_main_second-form1-1"
            />

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
      </section> */}

    </div>
  );
}
