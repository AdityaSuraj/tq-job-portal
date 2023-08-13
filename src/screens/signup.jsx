import React from "react";
import { useNavigate } from "react-router-dom";
var Spinner = require('react-spinkit');

export default function SignupScreen() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    } else if (e.target.name == "email") {
      setEmail(e.target.value)
    } else if (e.target.name == "phone") {
      setPhone(e.target.value)
    } else if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }


  const handleCreateAccount = (e) => {
    e.preventDefault();

    if(phone.length < 10){
      alert("please enter valid phone number");
      return;
    }else if(!email.includes('@')){
      alert('please enter valid email id');
      return;
    }

    setIsLoading(true);

    fetch('http://localhost:8000/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password
      })
    }).then((res) => res.json())
      .then((res) => {
        if(res.message == "success"){
          setIsLoading(false);
          alert('account created successfully.');
          navigate('/login');
        }else{
          alert("Something went wrong.");
        }
      })
  }



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

          <form action="#" className="sign-up-body-inputs" method="post">
            <input type="text" className="input" name="name" placeholder="Name" onInput={(handleInputChange)} />
            <input type="email" className="input" name="email" placeholder="Email" onInput={handleInputChange} />
            <input type="tel" maxLength={10} className="input" name="phone" placeholder="Phone Number" onInput={handleInputChange} />
            <input type="text" className="input" name="password" placeholder="Password" onInput={handleInputChange} />
            <button type="submit" className="sign-up-body-btn" onClick={handleCreateAccount}>
              {
                isLoading
                  ?
                  <Spinner name="three-bounce" />
                  :
                  "Sign up"
              }
            </button>
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
