import React from 'react'
import Layouts from '../../layouts'
import Calendar from "../../images/Isometric Stickers Calendar.png"

function Dashboard1() {
    return (
        <Layouts FooterImage={Calendar}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Your dashboard</h1>
                        <div className="flex">
                            <h2>Dashboard &gt; <span>Limes</span></h2>
                        </div>
                    </div>
                    <div className="dashboard-layout limes">
                        <div className="layout-block balance">
                            <p>You’ve got</p>
                            <h3>R57</h3>
                            <p>Limes</p>
                        </div>
                        <div className="layout-block info">
                            <div>
                                <p>You’ve loaded</p>
                                <h3>R1000</h3>
                            </div>
                            <div>
                                <p>You’ve earned</p>
                                <h3>R234</h3>
                            </div>
                            <div>
                                <p>You’ve sent</p>
                                <h3>R0</h3>
                            </div>
                            <div>
                                <p>You’ve cashed out</p>
                                <h3>R0</h3>
                            </div>
                        </div>
                    </div>
                    <div className="layout-block service">
                        <div className="item-box">
                            <p>Send Limes</p>
                            <input type="number" placeholder="Enter your amount" />
                            <button>Submit</button>
                        </div>
                        <div className="item-box">
                            <p>Load more Limes</p>
                            <input type="number" placeholder="Enter your amount" />
                            <button>Submit</button>
                        </div>
                        <div className="item-box">
                            <p>Cash-out Limes</p>
                            <input type="number" placeholder="Enter your amount" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Dashboard1