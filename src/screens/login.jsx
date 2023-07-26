import React from "react";

export default function LoginScreen() {
  return (
    <div className="login">
    <div className="login_main">
      <div className="login_main-box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
      </div>


      <div className="login_main_second">
        <div className="login_main_second-head">
          <h1>Login in your Job Hunter Account</h1>
        </div>
        <div className="login_main_second-link">
          <div className="login_main_second-link-1">
            <img src={require("../assets/facebook.png")}></img>
            <span> Sign up with </span>
            <a href="">Facebook</a>
          </div>

          <div className="login_main_second-link-2">
            <img src={require("../assets/Google - png.png")}></img>
            <span> Sign up with </span>
            <a href="">Google</a>
          </div>
        </div>

        <form action="#"  className="inputs">
          <input type="text" className="input" placeholder="Email"/>
          <input type="text" className="input" placeholder="Password"/>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="text">or Forgot Password</p>
        <p className="text1">
          Already have an Account ?<br/> <a href=""> Sign Up </a>
        </p>
      </div>
    
    </div>
    </div>
  );
}
