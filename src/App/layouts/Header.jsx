import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../images/limes_neon.svg";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">

                    <Link to="/">Home</Link>
                    <Link to="/payment">Payment</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/signin">SignIn</Link>
                    <Link to="/signup"><button className="empty">Signup</button></Link>
                </div>
                <i className="uil uil-align-center-alt menu" onclick="menu()" />
            </div>
        </header>
    )
}

export default Header