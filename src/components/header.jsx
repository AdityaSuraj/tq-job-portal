import React from "react";
import { MdAppRegistration, MdCall, MdHome, MdLogin, MdMenu, MdPeople } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
    const [isLogined, setIsLogined] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setIsLogined(true);
    //     }, 2000)
    // }, [])

    const handleDrawerStatus = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if(isDrawerOpen){
            document.body.style.overflowY = "auto"
        }else{
            document.body.style.overflowY = "hidden"

        }
    }

    return (
        <header className="header">
            <div className="drawer" style={{ left: isDrawerOpen ? 0 : -240 }}>
                <img src={require("../assets/logo.png")} alt="Website Logo" className="drawer__logo" />
                <hr />
                <ul>
                    <li>
                        <MdHome className="icon" />
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <MdPeople className="icon" />
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <MdCall className="icons" />
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>
                        <MdLogin className="icon" />
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <MdAppRegistration className="icon" />
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
            <div className="header__c">
                <img src={require("../assets/logo.png")} alt="Website Logo" className="header__c-logo" />
                <MdMenu className="header__c-hamburger" onClick={handleDrawerStatus} />
                <nav className="nav">
                    <ul>
                        <li>
                            <MdHome className="icon" />
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <MdPeople className="icon" />
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <MdCall className="icons" />
                            <Link to="/contactus">Contact Us</Link>
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
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <MdAppRegistration className="icon" />
                                    <Link to="/signup">Signup</Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </header>
    )
}