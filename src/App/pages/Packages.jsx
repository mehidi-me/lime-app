import React from 'react'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"
import Package from '../components/Package'
import Checking from '../components/Checking'


function Packages() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Our packages</h1>
                    </div>
                    <Package />
                    <div className="grid-item verifying" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1200}>
                        <div className="grid-2 gx">
                            <div className="content">
                                <h2>Like what you see?</h2>
                                <h4>Check if your number qualifies for our packages</h4>
                            </div>
                            <Checking />
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Packages