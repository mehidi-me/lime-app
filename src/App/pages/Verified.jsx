import React from 'react'
import { Link } from 'react-router-dom'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"
import Package from '../components/Package'


function Verified() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Congratulations!</h1>
                        <h2>You qualify for these packages:</h2>
                    </div>
                    <Package />
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