import React from 'react';
export default function SignupScreen(){
    return (
        <section className="login_main">
        <div className="login_main-box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
        </div>
        <div className="login_main_second">
          <div className="login_main_second-head">
            <h1>Sign up and Start Job Seeking</h1>
          </div>
         
          <div className="inputs">
          <div className="login_main_second-form1">
              <input type="text" placeholder="Name" /></div>
  
            <div className="login_main_second-form1">
              <input type="text" placeholder="Email-id" /></div>
            <div className="login_main_second-form1">
              <input type="text" placeholder="Password" /></div>
          </div>
  
          <div className="login_main_second-form3">Sign up </div>
          <p className="text">By signing up, you agree to our Terms of Use and Privacy Policy.</p>
          <p className="text1">Already have an Account ?<br/><a href="">  Log in </a></p>
        </div><br />
  
      </section>
       
    );
}