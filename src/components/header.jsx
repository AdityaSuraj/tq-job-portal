import React from "react";
import { MdAppRegistration, MdCall, MdHome, MdLogin, MdPeople } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
    const [isLogined, setIsLogined] = React.useState(false);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setIsLogined(true);
    //     }, 2000)
    // }, [])

    return (
        <header className="header">
            <div className="header__c">
                <img src={require("../assets/logo.png")} alt="Website Logo" className="header__c-logo" />
                <nav className="nav">
                    <ul>
                        <li>
                            <MdHome className="icon" />
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <MdPeople className="icon" />
                            <span>About Us</span>
                        </li>
                        <li>
                            <MdCall className="icons" />
                            <span>Contact Us</span>
                        </li>
                    </ul>
                </nav>
                <div className="auth">
                    {
                        isLogined
                            ?
                            <div className="auth__profile">
                                <img src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt="User Profile Image" className="auth__profile-img" />
                            </div>
                            :
                            <ul>
                                <li onClick={() => { setIsLogined(true) }}>
                                    <MdLogin className="icon" />
                                    <span>Login</span>
                                </li>
                                <li>
                                    <MdAppRegistration className="icon" />
                                    <span>Signup</span>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </header>
    )
}