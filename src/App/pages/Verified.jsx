import React from 'react'
import { Link } from 'react-router-dom'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"


function Verified() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Congratulations!</h1>
                        <h2>You qualify for these packages:</h2>
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
                    <div className="typo t2">
                        <h2>Like what you see? 👀</h2>
                        <h3>Sign up to seal the deal!</h3>
                        <Link to="/signup"><button>Sign up</button></Link>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Verified