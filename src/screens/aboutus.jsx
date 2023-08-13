import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
const Aboutus = () => {
  return (
    <div className="main">
      <Header />
      <div className="main_body">
        <div className="main_body-img">
          <img src={require("../assets/about.png")} alt="" srcset="" />
        </div>
        <div className="main_body-con">
          <h1>Welcome to Job Portal!</h1>
          <p>
            we are dedicated to connecting job seekers with their dream careers
            and assisting employers in finding the perfect candidates to drive
            their companies forward. Our platform serves as a bridge between
            talent and opportunity, fostering meaningful connections that lead
            to mutual success.
          </p>

          <p>
            <span>Our Mission:</span>
            <br /> Our mission is to simplify the job search and recruitment
            process, making it efficient, transparent, and tailored to the needs
            of both job seekers and employers. We aim to empower individuals by
            providing them with the tools, resources, and opportunities they
            need to achieve their professional aspirations. Likewise, we strive
            to enable companies to discover exceptional talent that aligns with
            their vision and values.
          </p>
          <div className="main_body-off">
            <h3>What we offer:-</h3>
            <ul>
                <li><span>Comprehensive Job Listings:</span> Our platform hosts a diverse range of job listings across various industries and roles. Whether you're a recent graduate, a seasoned professional, or anywhere in between, you'll find opportunities that match your skills and ambitions.</li>
                <li><span>Personalized Profiles: </span>Job seekers can create detailed profiles that showcase their qualifications, experience, and preferences. This helps employers find candidates who are the best fit for their roles.</li>
                <li><span>Resourceful Blog and Learning Center:</span> We're not just about job listings. Our blog and learning center offer valuable insights into the job market, career advice, resume tips, interview strategies, and industry trends to help job seekers make informed decisions.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
