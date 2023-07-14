import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__cols">
                <div className="footer__col">
                    <img src={require("../assets/logo.png")} alt="" srcset="" className="footer__col-logo" />
                    <p className="footer__col-txt">
                        Deserunt tempor velit enim incididunt. Velit id sint cillum ipsum sint voluptate consequat nisi cillum voluptate qui velit aliat adipisicing ex cillum excepteur incididunt non labore.
                    </p>
                </div>
                <div className="footer__col">
                    <span>Important Links</span>
                    <div className="nav">
                        <a href="http://" target="_blank" >Search Job</a>
                        <a href="http://" target="_blank" >Blogs</a>
                        <a href="http://" target="_blank" >About us</a>
                        <a href="http://" target="_blank" >About us</a>
                        <a href="http://" target="_blank" >Contact us</a>

                    </div>
                </div>
                <div className="footer__col">
                    <span>Others</span>
                    <div className="nav">
                        <a href="http://" target="_blank" >Privacy Policy</a>
                        <a href="http://" target="_blank" >Terms & Conditions</a>
                        <a href="http://" target="_blank" >Refund Policy</a>
                    </div>
                </div>
                <div className="footer__col">
                    <span>Social Media Links</span>
                    <div className="footer__col-row">
                        <img src={require("../assets/Twitter.png")} alt="" className="footer__col-row-logo" />
                        <img src={require("../assets/Facebook.png")} alt="" className="footer__col-row-logo" />
                        <img src={require("../assets/linden.png")} alt="" className="footer__col-row-logo" />
                    </div>
                    <p>Download App From Playtore</p>
                    <img src={require("../assets/qr.png")} alt="" srcset="" className="footer__col-qr" />
                    {/* <img src={require("../assets/google_play.png")} alt="" srcset="" className="footer_col-playlogo" /> */}
                </div>

            </div>
            {/* <div className="footer_main_second">
                <div className="footer_main_second-follow">
                    <p>Follow us</p>
                </div>
                <div className="footer_main_second-logos">
                    <img src={require("../assets/Twitter.png")} alt="" className=" footer_main_second-logos-icon" />
                    <img src={require("../assets/Facebook.png")} alt="" className=" footer_main_second-logos-icon" />
                    <img src={require("../assets/linden.png")} alt="" className=" footer_main_second-logos-icon" />
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                    <a href="http://" target="_blank" >home</a>
                </div>
            </div> */}

            <div className="footer__copyright">
                <p>Copyright © 2020 Taquino India Pvt. Ltd.  All rights reserved.</p>
            </div>
        </footer>
    )
}