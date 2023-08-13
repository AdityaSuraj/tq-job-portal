import React from "react";

export default function LoginScreen() {
  return (
    <section className="login_main">
      <div className="login_main-box">
        <img src={require("../assets/logo.png")} alt="" srcset="" />
      </div>


      <div className="login_main_second">
        <div className="login_main_second-head">
          <h1>Login in your Job Hunter Account</h1>
        </div>
        <div className="login_main_second-form">
          <img
            src={require("../assets/Google - png.png")}
            alt=""
            srcset=""
            className="login_main_second-form-gl"
          />
          login with <a href="https://www.google.com/"> Google </a>
        </div>
        <div className="login_main_second-form">
          <img
            // src={require("../assets/facebook.png")}
            alt=""
            srcset=""
            className="login_main_second-form-gl"
          />
          login with <a href="https://www.facebook.com/"> Facebook </a>
        </div>

        <form action="#">
          <input type="text" className="input" placeholder="Email"/>
          <input type="text" className="input" placeholder="Password"/>
          
        </form>
        {/* <div className="inputs">
          <div className="login_main_second-form1">
            <input type="text" placeholder="Email-id" />
          </div>
          <div className="login_main_second-form1">
            <input type="text" placeholder="Password" />
          </div>
        </div> */}

        <div className="login_main_second-form3">Log in </div>
        <p className="text">or Forget Password</p>
        <p className="text1">
          Already have an Account ? <a href=""> Sign Up </a>
        </p>
      </div>
      <br />
    </section>
  );
}
