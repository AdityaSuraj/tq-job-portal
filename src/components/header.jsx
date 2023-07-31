import React from "react";
import { MdAppRegistration, MdBookmark, MdCall, MdHome, MdLogin, MdLogout, MdMenu, MdPeople, MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const [isLogined, setIsLogined] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [profileDrawerOpen,setProfileDrawerOpen] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setIsLogined(true);
        }
    }, [])

    const handleDrawerStatus = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if (isDrawerOpen) {
            document.body.style.overflowY = "auto"
        } else {
            document.body.style.overflowY = "hidden"

        }
    }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/login')
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
                                <img onClick={()=>{setProfileDrawerOpen(!profileDrawerOpen)}} src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt="User Profile Image" className="auth__profile-img" />

                                <div className="auth__profile-drawer" style={{display:profileDrawerOpen ? "block" : "none"}}>
                                    <ul>
                                        <li>
                                            <MdPerson className="icon" />
                                            <span>My Profile</span>
                                        </li>
                                        <li>
                                            <MdBookmark className="icon" />
                                            <span>Bookmarks</span>
                                        </li>
                                        <li onClick={handleLogout}>
                                            <MdLogout className="icon" />
                                            <span>Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <ul>
                                <li>
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