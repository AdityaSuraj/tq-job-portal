import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value)
    } else if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }

  const handleUserLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          localStorage.setItem('token', res.token);
          navigate('/');
        } else {
          alert(res.data);
        }
      })
  }


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

          <form action="#" className="inputs">
            <input type="text" className="input" name="email" placeholder="Email" onInput={handleInputChange} />
            <input type="password" className="input" name="password" placeholder="Password" onInput={handleInputChange} />
            <button type="submit" className="btn" onClick={handleUserLogin}>Login</button>
          </form>
          <p className="text">or Forgot Password</p>
          <p className="text1">
            Already have an Account ?<br /> <a href=""> Sign Up </a>
          </p>
        </div>

      </div>
    </div>
  );
}
