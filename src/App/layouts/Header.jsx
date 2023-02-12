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
                    <a onclick="menu()">Home</a>
                    <a onclick="menu()">Link</a>
                    <a onclick="menu()">Link</a>
                    <a onclick="menu()">Link</a>
                    <a onclick="menu()">
                        <button className="empty">Signup</button>
                    </a>
                </div>
                <i className="uil uil-align-center-alt menu" onclick="menu()" />
            </div>
        </header>
    )
}

export default Header