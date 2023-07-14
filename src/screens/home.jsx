import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <section className="Patners">
        <div className="Patners_head">
          <span>Our Patners</span>
        </div>
        <div className="Patners_company">
            
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
        </div>
        <div className="Patners_company">
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
        </div>
        <div className="Patners_company">
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
            <img src={require("../assets/Taquino.png")} alt="" srcset="" className="Patners_company-logo"/>
        </div>
      </section>
      <section className="perfect">
            <div className="perfect-head">
                <h1>What Makes us Perfect</h1>
            </div>
            <div className="perfect-logo">
                <div className="perfect-logo-img">
                        <img src={require("../assets/Simple_hiring pic.png")} alt="" srcset="" className="perfect-logo-img-1" />
                        <span>Simple hiring</span>
                        
                </div>
                <div className="perfect-logo-img">
                <img src={require("../assets/perfect_rec_pic.png")} alt="" srcset="" className="perfect-logo-img-1" />
                <span> Recomendation</span>
                </div>
                <div className="perfect-logo-img">
                <img src={require("../assets/customer_pic.png")} alt="" srcset="" className="perfect-logo-img-1" />
                <span>Customer Support</span>
                </div>

            </div>
      </section>
      <section className="testimonial">
        <div className="testimonial_head">
          <span>Testimonial</span>
        </div>
        <div className="testimonial-card">
          <Card name="sonu kumar" img={require("../assets/accenture.png")} />
        </div>
      </section>
      <Footer />
      
    </div>
  );
}
