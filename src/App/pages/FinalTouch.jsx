import React from 'react'
import Layouts from '../layouts'
import Pencile from "../images/Isometric Stickers Pencil.png"
import Checklist from "../images/Isometric Stickers Checklist.png"

function FinalTouch() {
    return (
        <Layouts FooterImage={Checklist}>
            <main className="crop">
                <div className="container">
                    <div className="typo">
                        <h1>Final touches</h1>
                        <h2>
                            Look at you, blessing your future self. Let’s make it official 😉
                        </h2>
                    </div>
                    <div className="digital-contract">
                        <div className="block">
                            <article>
                                <h2>Digital contract</h2>
                                <p>
                                    <span>{'{'}User name and surnamem id number{'}'}</span> hereby enters
                                    into a contract with Limes, for the following products:
                                </p>
                            </article>
                            <div className="card-wraper">
                                <img className="overlay" src={Pencile} alt="" />
                                <div className="card">
                                    <div className="head"><h3>087 876 5433</h3></div>
                                    <div className="body">
                                        <h4>20GB / 20GB</h4>
                                        <h5>Day/Night anytime data</h5>
                                        <h4>R000</h4>
                                        <p>Supplied every 30 days over 6 months</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="head"><h3>087 876 5433</h3></div>
                                    <div className="body">
                                        <h4>20GB / 20GB</h4>
                                        <h5>Day/Night anytime data</h5>
                                        <h4>R000</h4>
                                        <p>Supplied every 30 days over 6 months</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <h2>Total:</h2>
                                <span>R000</span>
                            </div>
                        </div>
                        <div className="accept-tos">
                            <input type="radio" />
                            <p>I CONFIRM &amp; AGREE TO THESE DIGITAL CONTRACT TERMS</p>
                        </div>
                        <div className="flex flx">
                            <a href="http://" target="_blank">Read full digital contract terms</a>
                            <a href="http://" target="_blank">Read our Privacy Policy</a>
                        </div>
                        <center><button>sign up &amp; pay</button></center>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default FinalTouch