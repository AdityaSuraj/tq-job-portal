import React from 'react';
export default function contactus(){
    return (
        <section className="contactus_main">
        <div className="contactus_main-box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
        </div>
        
        
        <div className="contactus_main_second">
          
          <div className="contactus_main_second-head">
            <h1>Contact Us</h1>
          </div>
         
          <div className="inputs">
             <div className="contactus_main_second-form1">
              <input type="text" placeholder="Name" className='contactus_main_second-form1-1' />
             </div>
            <div className="contactus_main_second-form1">
              <input type="text" placeholder="Email-id"className='contactus_main_second-form1-1' />
            </div>
            <div className="contactus_main_second-form1">
              <input type="text" placeholder="Message"className='contactus_main_second-form1-1' />
            </div>
          </div>
  
          <div className="contactus_main_second-form3">Submit</div>
        
        </div>
        <br />
  
      </section>
       
    );
}

