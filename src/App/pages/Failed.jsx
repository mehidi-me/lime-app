import React from 'react'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"

function Failed() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Oh no!</h1>
                        <h2>Looks like it’s time to upgrade to a prepaid MTN SIM.</h2>
                    </div>
                    <h3 className="sub-titles">Here’s what you’re missing out on:</h3>
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
                        <h2>Come on, join the club!</h2>
                        <h3>Find your nearest MTN branch</h3>
                    </div>
                    <div className="grid-2 adj">
                        <div>
                            <div className="filds">
                                <div className="fild">
                                    <input type="text" placeholder="Address" />
                                    <span className="material-icons"> cancel </span>
                                </div>
                            </div>
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14588.828311770616!2d90.2713955!3d23.91772025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e951886302cb%3A0x9013b84cddd4651b!2sPodatik%20Shorok!5e0!3m2!1sen!2sbd!4v1674238032090!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <h3>
                            Bookmark <a href="https://www.limes.africa">limes.africa</a> to sign
                            up as soon as you get your prepaid MTN SIM. <br />
                            We can’t wait to see you again!
                        </h3>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Failed