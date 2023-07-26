import React from "react";
export default function SignupScreen() {
  return (

    <div className="sign">
    <div className="sign-up">
      <div className="sign-up_box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
      </div>
      <div className="sign-up-body">
        <div className="sign-up-body-head">
          <h1>Sign up and Start Job Seeking</h1>
        </div>

        <form action="#" className="sign-up-body-inputs">
          <input type="text" className="input" placeholder="Name" />
          <input type="text" className="input" placeholder="Email" />
          <input type="text" className="input" placeholder="Password" />
        <button type="submit" className="sign-up-body-btn">Signup</button>
        </form>
        <p className="sign-up-body-text">
          By signing up, you agree to our terms of Use and Privacy Policy.
        </p>
        <p className="sign-up-body-text1">
          Already have an Account ?
          <a href=""> Log in </a>
        </p>
      </div>
    </div>
    </div>
   
  );
}
