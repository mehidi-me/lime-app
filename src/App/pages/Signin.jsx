import React, { useState } from 'react'
import Layouts from '../layouts'
import Charts from "../images/Isometric Stickers Charts.png"
import Airplane from "../images/Isometric Stickers Paper Airplane.png"

function Signin() {
    const [passHide, setPassHide] = useState(true);
    return (
        <Layouts FooterImage={Airplane}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Sign in</h1>
                        <h2>Let the good Limes roll.</h2>
                    </div>
                    <div className="row">
                        <img src={Charts} alt="" />
                        <div className="portal fix">
                            <form action="#" className="auth">
                                <img src={Airplane} alt="" />
                                <div className="fild">
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="fild">
                                    <input type={passHide ? "password" : 'text'} placeholder="Password" />

                                    <i className={passHide ? "uil-meh-closed-eye" : "uil uil-smile"} onClick={() => setPassHide(pre => !pre)} />
                                </div>
                                <a className="forgot">Forgot password?</a>
                                <button className="sign-in" name="submit">Sign in</button>
                            </form>
                            <p>
                                Not part of the Limes family yet? <br />
                                <a href>Verify your number</a> to join the fam.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Signin