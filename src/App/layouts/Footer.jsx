import React from 'react';
import { Link } from 'react-router-dom';
import FooterImage from "../images/Isometric Stickers Rocket.png";
import Logo from "../images/SVG/limes_white.svg"

function Footer({ FImage = FooterImage }) {
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="row-2">
                        <div className="link">
                            <Link to="/failed">Failed</Link>
                            <Link to="/final-touch">Final Touch</Link>
                            <Link to="/go-to-dashboard">Go To Dashboard</Link>
                            <Link to="/opps">Opps</Link>
                        </div>
                        <div className="link">
                            <Link to="/verified">Verified</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/dashboard1">Dashboard One</Link>
                            <Link to="/dashboard2">Dashboard Tow</Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={FImage} alt="" />
                    <div className="social">
                        <a target="_blank"><i className="uil uil-facebook-f" /></a>
                        <a target="_blank"><i className="uil uil-instagram" /></a>
                        <a target="_blank"><i className="uil uil-twitter" /></a>
                    </div>
                </div>
            </div>
            <div className="copy">© All rights reserved | Limes 2023</div>
        </footer>
    )
}

export default Footer