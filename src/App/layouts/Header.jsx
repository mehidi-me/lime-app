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
                    <a onclick="menu()">Home</a>
                    <a onclick="menu()">Link</a>
                    <a onclick="menu()">Link</a>
                    <a onclick="menu()">Link</a>

                    <Link to="/failed"><button className="empty">Signup</button></Link>
                </div>
                <i className="uil uil-align-center-alt menu" onclick="menu()" />
            </div>
        </header>
    )
}

export default Header