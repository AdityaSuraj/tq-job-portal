
import  React,{useState} from "react";
import axios from "axios";

export default function contactus() {
const[formData, setFormData]= useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .post("/api/contact", formData)
    .then((response) => {
      console.log("Form submitted successfully!", response.data);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
};


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
          <form className="inputs" action="" method="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="contactus_main_second-form1-1"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={true}
            
            
            />
            <input
              type="text"
              placeholder="Email-id"
              className="contactus_main_second-form1-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required={true}
            />

            <label htmlFor="message">Message</label>
            <textarea
              cols={5}
              type="text"
              placeholder="Message"
              className="contactus_main_second-form1-1"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required={true}
           ></textarea>

            <button  type="submit">Submit</button>
          </form>
        </div>
        <div className="contactus__c-right">
          <img src={require("../assets/CallCenter.jpg")} alt="" />
        </div>

      </div>
      
    </div>
  );
}
