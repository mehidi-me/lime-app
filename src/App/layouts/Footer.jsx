import React from 'react';
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
                            <a >Link</a>
                            <a >Link</a>
                            <a >Link</a>
                            <a >Link</a>
                        </div>
                        <div className="link">
                            <a >Link</a>
                            <a >Link</a>
                            <a >Link</a>
                            <a >Link</a>
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