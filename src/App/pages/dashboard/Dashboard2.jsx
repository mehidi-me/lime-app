import React from 'react'
import Layouts from '../../layouts'
import Calendar from "../../images/Isometric Stickers Calendar.png"

function Dashboard2() {
    return (
        <Layouts FooterImage={Calendar}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Your dashboard</h1>
                        <div className="flex">
                            <h2>Dashboard &gt; <span>Transactions</span></h2>
                        </div>
                    </div>
                    <div className="transactions">
                        <div className="wrapers">
                            <div className="item">
                                <div className="first">
                                    <p>#</p>
                                    <p>Description</p>
                                </div>
                                <div className="end">
                                    <p>Amount</p>
                                    <p style={{ cursor: 'pointer' }}>
                                        Date <i className="uil uil-sort-amount-up" />
                                    </p>
                                    <p>Time</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="first">
                                    <p>03</p>
                                    <p>Cash out</p>
                                </div>
                                <div className="end">
                                    <p>- R150</p>
                                    <p>05/01/2023</p>
                                    <p>17:02</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="first">
                                    <p>02</p>
                                    <p>Cash out</p>
                                </div>
                                <div className="end">
                                    <p>- R150</p>
                                    <p>05/01/2023</p>
                                    <p>17:02</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="first">
                                    <p>01</p>
                                    <p>Cash out</p>
                                </div>
                                <div className="end">
                                    <p>- R150</p>
                                    <p>05/01/2023</p>
                                    <p>17:02</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                        <button className="more">View More</button>
                    </center>
                </div>
            </main>

        </Layouts>
    )
}

export default Dashboard2