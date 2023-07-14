import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_main_copyright">
                <img src={require("../assets/logo.png")} alt="" srcset="" className="footer_main_copyright-logo" />
                <p>Copyright © 2020 Draft LLC.</p>
                <p>All rights reserved.</p>
            </div>
            <div className="footer_main_second">
                <div className="footer_main_second-follow">
                    <p>Follow us</p>
                </div>
                <div className="footer_main_second-logos">
                    <img src={require("../assets/Twitter.png")} alt="" className=" footer_main_second-logos-icon"/>
                    <img src={require("../assets/Facebook.png")} alt="" className=" footer_main_second-logos-icon"/>
                    <img src={require("../assets/linden.png")} alt="" className=" footer_main_second-logos-icon"/>
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                </div>
                <div className="footer_main_second-links">
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">home</a>
                </div>
            </div>
            <div className="footer_play">
                <img src={require("../assets/google_play.png")} alt="" srcset="" className="footer_play-logo" />
                <img src={require("../assets/qr.png")} alt="" srcset="" className="footer_play-logo2" />
                <span className="footer_play-text">Scan Qr</span>
            </div>
        </footer>
    )
}