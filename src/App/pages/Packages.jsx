import React from 'react'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"


function Packages() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Our packages</h1>
                    </div>
                    <div className="grid-2 packages" style={{ border: 'unset', paddingTop: 'unset' }}>
                        <div className="package-wrap">
                            <div className="package">
                                <h2>20GB / 20GB</h2>
                                <p>Day/Night anytime data</p>
                            </div>
                            <div className="tgl-main">
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R599</span> once-off supplied over
                                            <span>3 months</span>
                                        </p>
                                        <i className="uil uil-angle-up" />
                                    </div>
                                    <div className="ans active">
                                        <p>You’ll earn 63 Limes = R63</p>
                                    </div>
                                </div>
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R1150</span> once-off supplied over
                                            <span>3 months</span>
                                        </p>
                                        <i className="uil uil-angle-down" />
                                    </div>
                                    <div className="ans">
                                        <p>You’ll earn 63 Limes = R63</p>
                                    </div>
                                </div>
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R2250</span> once-off supplied over
                                            <span>12 months</span>
                                        </p>
                                        <i className="uil uil-angle-down" />
                                    </div>
                                    <div className="ans">
                                        <p>You’ll earn 63 Limes = R63</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="package-wrap">
                            <div className="package">
                                <h2>10GB / 20GB</h2>
                                <p>Day/Night anytime data</p>
                                <div className="trend">Trending</div>
                            </div>
                            <div className="tgl-main">
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R499</span> once-off supplied over
                                            <span>3 months</span>
                                        </p>
                                        <i className="uil uil-angle-up" />
                                    </div>
                                    <div className="ans active">
                                        <p>You’ll earn 38 Limes = R38</p>
                                    </div>
                                </div>
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R950</span> once-off supplied over
                                            <span>6 months</span>
                                        </p>
                                        <i className="uil uil-angle-down" />
                                    </div>
                                    <div className="ans">
                                        <p>You’ll earn 63 Limes = R63</p>
                                    </div>
                                </div>
                                <div className="tgl">
                                    <div className="collaps">
                                        <p>
                                            Starts at <span>R1850</span> once-off supplied over
                                            <span>12 months</span>
                                        </p>
                                        <i className="uil uil-angle-down" />
                                    </div>
                                    <div className="ans">
                                        <p>You’ll earn 63 Limes = R63</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item verifying" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                        <div className="grid-2 gx">
                            <div className="content">
                                <h2>Like what you see?</h2>
                                <h4>Check if your number qualifies for our packages</h4>
                            </div>
                            <div className="checking">
                                <form action="#">
                                    <label htmlFor="num">Add up to three numbers</label>
                                    <div className="item">
                                        <div className="input">
                                            <input type="tel" placeholder="Enter number here" />
                                            <div className="cut">
                                                <span className="material-icons"> cancel </span>
                                            </div>
                                        </div>
                                        <div className="add">
                                            <span className="material-icons-outlined"> add </span>
                                        </div>
                                    </div>
                                    <button>Verify</button>
                                    <p>Deals only available prepaid MTN customers</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Packages