import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MdSearch } from "react-icons/md";

export default function HomeScreen() {

  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    setIsMobileDevice(matchMedia("(max-width: 600px)").matches)
  }, [])

  return (
    <div>
      <Header />

      <div className="carousel">
        <div className="carousel__title">
          <h3 className="carousel__h3">Officia aliquip irure</h3>
          <h3 className="carousel__h3">Officia aliquip.</h3>
        </div>

        <div className="carousel__img">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Carousel Img" />
        </div>

        <div className="carousel__search">
          <h2>Search For Job You Are Looking For</h2>
          <form action="#">
            <select name="City" id="">
              <option value="">Select City </option>
            </select>
            <select name="Role" id="">
              <option value="">Select Job Role </option>
            </select>
            <button>
              <MdSearch className="icon" />
              <p>Search</p>
            </button>
          </form>
        </div>

      </div>

      <section className="Patners">
        <div className="Patners_head">
          <span>Our Patners</span>
        </div>
        <div className="Patners_company">
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
          <img src="https://img.freepik.com/premium-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?w=1380" alt="" srcset="" className="Patners_company-logo" />
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
          <OwlCarousel className='owl-theme' dots={false} loop={true} autoplay items={isMobileDevice ? 1 : 3} responsive={{}} >
            <Card name="sonu kumar" img={require("../assets/accenture.png")} />
            <Card name="sonu kumar" img={require("../assets/accenture.png")} />
            <Card name="sonu kumar" img={require("../assets/accenture.png")} />
            <Card name="sonu kumar" img={require("../assets/accenture.png")} />
            <Card name="sonu kumar" img={require("../assets/accenture.png")} />
          </OwlCarousel>
        </div>
      </section>
      <Footer />

    </div>
  );
}