import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../images/limes_neon.svg";

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const menuToggole = () => {
        setMenuActive(pre => !pre)
    }
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className={menuActive ? "links active" : "links"}>

                    <Link to="/" onClick={menuToggole}>Home</Link>
                    <Link to="/payment" onClick={menuToggole}>Payment</Link>
                    <Link to="/packages" onClick={menuToggole}>Packages</Link>
                    <Link to="/signin" onClick={menuToggole}>SignIn</Link>
                    <Link to="/signup" onClick={menuToggole}><button className="empty">Signup</button></Link>
                </div>
                <i className={menuActive ? "uil uil-align-center-alt menu uil-multiply" : "uil uil-align-center-alt menu"} onClick={menuToggole} />
            </div>
        </header>
    )
}

export default Header