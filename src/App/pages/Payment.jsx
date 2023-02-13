import React, { useState } from 'react'
import Layouts from '../layouts'
import Mobile from "../images/Isometric Stickers Mobile.png"
import { useNavigate } from 'react-router-dom';


function Payment() {
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate()
    return (
        <Layouts FooterImage={Mobile}>
            <main>
                <div className="container">
                    <div className="payment-module">
                        <div className="layout">
                            <div className="progress-bar">
                                <div className={activeTab > 1 ? "progress active" : "progress"}>
                                    <div className="progress-no">
                                        <b>1</b>
                                        <span className="material-icons"> check </span>
                                    </div>
                                    <p>Personal</p>
                                </div>
                                <div className={activeTab === 3 ? "progress active" : "progress"}>
                                    <div className="progress-no">
                                        <b>2</b>
                                        <span className="material-icons"> check </span>
                                    </div>
                                    <p>Payment</p>
                                </div>
                                <div className={activeTab === 3 ? "progress active" : "progress"}>
                                    <div className="progress-no">
                                        <b>3</b>
                                        <span className="material-icons"> check </span>
                                    </div>
                                    <p className="done">Done!</p>
                                </div>
                            </div>
                            <div className="main-layout-page">
                                <div className={activeTab === 1 ? "progress-content active" : "progress-content"}>
                                    <h3>Personal Details</h3>
                                    <div className="module">
                                        <div className="grid-2">
                                            <div className="fild">
                                                <input type="text" placeholder="First name" />
                                            </div>
                                            <div className="fild">
                                                <input type="text" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="grid-2">
                                            <div className="fild">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="fild">
                                                <input type="text" placeholder="Address" />
                                            </div>
                                        </div>
                                        <button onClick={() => setActiveTab(2)}>Next</button>
                                    </div>
                                </div>
                                <div className={activeTab === 2 ? "progress-content active" : "progress-content"}>
                                    <h3>Payment</h3>
                                    <div className="module">
                                        <div className="grid-2" id="card-type">
                                            <div className="box">
                                                <input id="cradit-card" type="radio" name="payment" defaultChecked />
                                                <label htmlFor="cradit-card">
                                                    <div />
                                                    Credit card
                                                </label>
                                            </div>
                                            <div className="box">
                                                <input id="bank" type="radio" name="payment" />
                                                <label htmlFor="bank">
                                                    <div />
                                                    Bank
                                                </label>
                                            </div>
                                        </div>
                                        <div className="required-info active">
                                            <div className="fild">
                                                <label htmlFor="card-number">Card number</label>
                                                <input type="text" id="card-number" placeholder="Card number" />
                                            </div>
                                            <div className="fild">
                                                <label htmlFor="holder">Card holder name</label>
                                                <input type="text" id="holder" placeholder="Card holder name" />
                                            </div>
                                            <div className="grid-2">
                                                <div className="fild">
                                                    <label htmlFor="ex-date">Expiry date</label>
                                                    <input type="month" id="ex-date" placeholder="Expairy date" />
                                                </div>
                                                <div className="fild">
                                                    <label htmlFor="cvv">CVV Code</label>
                                                    <input id="cvv" type="text" placeholder="CVV code" />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => setActiveTab(3)}>Pay Now</button>
                                    </div>
                                </div>
                                <div className={activeTab === 3 ? "progress-content active" : "progress-content"}>
                                    <h3>You are awsome!</h3>
                                    <div className="module">
                                        <h4>Thank you so much</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Qui labore inventore eveniet aut quaerat libero ipsum quis
                                            magnam cupiditate quisquam. Recusandae accusantium
                                            laboriosam sequi fuga quos porro soluta maxime sit?
                                        </p>
                                        <button onClick={() => navigate('/dashboard')}>Go to dashboard</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Payment