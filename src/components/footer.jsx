import React from "react";

export default function Footer(){
    return (
        <footer className="footer_main">
            <div className="footer_main-copyright">
                <img src={require("../assets/logo.png")} alt="" srcset="" className="footer_main-logo" />
                <p>Copyright © 2020 Draft LLC.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}