import React from 'react'
import Logo from "../images/limes_neon.svg";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <a href onclick="menu()">Home</a>
                    <a href onclick="menu()">Link</a>
                    <a href onclick="menu()">Link</a>
                    <a href onclick="menu()">Link</a>
                    <a href="signin.html" onclick="menu()">
                        <button className="empty">Signup</button>
                    </a>
                </div>
                <i className="uil uil-align-center-alt menu" onclick="menu()" />
            </div>
        </header>
    )
}

export default Header