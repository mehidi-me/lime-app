import React from 'react'
import Layouts from '../layouts';
import Hero from "../images/hero.svg"
import Device from "../images/device.png"
import Coin from "../images/coin.svg"
import Coins from "../images/coins.svg"
import Stikers from "../images/Isometric Stickers Target.png"
import Rocket from "../images/Isometric Stickers Rocket.png"

function Home() {
    return (
        <Layouts FooterImage={Rocket}>
            <main>
                <div className="container">
                    <div className="wraper">
                        <div className="content" data-aos="fade-up" data-aos-duration={1200}>
                            <h1>Buy data like it's 2023</h1>
                            <img src={Hero} alt="" />

                        </div>
                        <img className="mobile-view" data-aos="fade-up" data-aos-duration={1100} src={Device} alt="" />
                    </div>
                </div>
            </main>
            <section>
                <div className="container">
                    <div className="grid-item verifying" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                        <div className="grid-2 gx">
                            <div className="content">
                                <h2>Check if your number qualifies for our packages</h2>
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
                    <div className="typo typo3">
                        <h2>Flipping the switch on data contracts</h2>
                        <h3>Let’s do the math🤓</h3>
                    </div>
                    <div className="grid-2 vs">
                        <div className="grid-item" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                            <div className="content">
                                <div className="hg">
                                    <h2>Limes</h2>
                                    <h3>Pay around R5 per GB</h3>
                                    <p>
                                        Live your best life without having to worry about monthly
                                        payments.
                                    </p>
                                </div>
                                <div className="bottom">
                                    <img src={Coin} alt="" />
                                </div>
                            </div>
                            <div className="compair">VS</div>
                        </div>
                        <div className="grid-item" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200} style={{ background: 'var(--pink)', zIndex: -1 }}>
                            <div className="content">
                                <div className="hg">
                                    <h2>The world</h2>
                                    <h3>Pay around R78 per GB</h3>
                                    <p>
                                        Hold yourself back by locking yourself in to monthly payments.
                                    </p>
                                </div>
                                <div className="bottom">
                                    <img src={Coins} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                        <div className="image">
                            <img src={Stikers} alt="" />
                        </div>
                        <div className="content">
                            <h2>Easy once-off payment</h2>
                            <p>
                                Pay once, sit back and rest assured you’ll have data straight to
                                your phone every month.*
                            </p>
                            <span>*for the duration of your chosen contract package.</span>
                        </div>
                    </div>
                    <center>
                        <a ><button className="mt5">see our packages</button></a>
                    </center>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="typo3 tt">
                        <h2>Explore our digital ecosystem</h2>
                    </div>
                    <div className="grid-4 explore" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                        <div className="card">
                            <h3>Load and buy</h3>
                            <h4>Stack your Limes for the harder times.</h4>
                            <p>
                                Limes is your digital currency, use it to live your best life.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Earn</h3>
                            <h4>Turning lemons into Limes.</h4>
                        </div>
                        <div className="card">
                            <h3>Save or Send</h3>
                            <h4>Save a lime or save a friend.</h4>
                        </div>
                        <div className="card">
                            <h3>Cash out</h3>
                            <h4>In a pickle? Squeeze some Limes.</h4>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>

    )
}

export default Home