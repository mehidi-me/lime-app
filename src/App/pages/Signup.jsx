import React from 'react'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"


function Signup() {
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Sign up &amp; seal the deal</h1>
                        <h2>You’re one step closer. Fill in your details below.</h2>
                    </div>
                    <form action="#">
                        <div className="grid-3 account-info">
                            <div>
                                <h2 className="block-title">Personal</h2>
                                <div className="filds">
                                    <div className="fild">
                                        <input type="text" placeholder="Name" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                    <div className="fild">
                                        <input type="text" placeholder="Surname" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                    <div className="fild">
                                        <input type="number" placeholder="ID Number" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="block-title">Contact</h2>
                                <div className="filds">
                                    <div className="fild">
                                        <input type="tel" placeholder="Contact number" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                    <div className="fild">
                                        <input type="email" placeholder="Email address" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="block-title">Choose your password</h2>
                                <div className="filds">
                                    <div className="fild">
                                        <input type="password" placeholder="Enter password" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                    <div className="fild">
                                        <input type="password" placeholder="Confirm password" />
                                        <span className="material-icons"> cancel </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-2 packages">
                            <div className="package">
                                <h2>20GB / 20GB</h2>
                                <p>Day/Night anytime data</p>
                            </div>
                            <div className="package">
                                <h2>10GB / 10GB</h2>
                                <p>Day/Night anytime data</p>
                                <div className="trend">Trending</div>
                            </div>
                        </div>
                        <div className="choose-package">
                            <div className="grid-3">
                                <div className="number-package">
                                    <div className="num">
                                        <h2>01</h2>
                                        <h3>087 876 5433</h3>
                                    </div>
                                    <select name="#" id>
                                        <option value="none">Choose your package</option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                    </select>
                                    <select name="#" id>
                                        <option value="none">Choose your terms</option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                    </select>
                                </div>
                                <div className="number-package">
                                    <div className="num">
                                        <h2>02</h2>
                                        <h3>082 456 7789</h3>
                                    </div>
                                    <select name="#" id>
                                        <option value="none">Choose your package</option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                    </select>
                                    <select name="#" id>
                                        <option value="none">Choose your terms</option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                        <option value="20GB/20GB day/night anytime data">
                                            20GB/20GB day/night anytime data
                                        </option>
                                    </select>
                                </div>
                                <div className="number-package unavailable">
                                    <div className="num">
                                        <h2>03</h2>
                                        <h3>082 456 7789</h3>
                                    </div>
                                    <p>
                                        Oops, this is not a prepaid MTN number. Try another one?
                                        <br />
                                        <a href>Verify another number. <br />
                                            Click here</a>
                                        to see where to upgrade to a MTN prepaid SIM. Oops, this is
                                        not a prepaid MTN number. <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <button>Back</button>
                            <button>Next</button>
                        </div>
                    </form>
                </div>
            </main>

        </Layouts>
    )
}

export default Signup