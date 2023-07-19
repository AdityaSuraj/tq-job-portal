import React from "react";
export default function SignupScreen() {
  return (
    
    <section className="signup">
      <div className="signup_box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
      </div>
      <div className="signup-body">
        <div className="signip-body-head">
          <h1>Sign up and Start Job Seeking</h1>
        </div>

        <form action="#" className="signup-body-inputs">
          <input type="text" className="input" placeholder="Name" />
          <input type="text" className="input" placeholder="Email" />
          <input type="text" className="input" placeholder="Password" />
        </form>
        <button type="submit" className="signup-body-btn">Signup</button>
        <p className="signup-body-text">
          By signing up, you agree to our<span>terms</span>of Use and Privacy Policy.
        </p>
        <p className="signup-body-text1">
          Already have an Account ?
          <a href=""> Log in </a>
        </p>
      </div>
    </section>
   
  );
}
