import React from 'react'
import Layouts from '../../layouts'
import Calendar from "../../images/Isometric Stickers Calendar.png"

function Dashboard() {
    return (
        <Layouts FooterImage={Calendar}>
            <main>
                <div className="container">
                    <div className="typo">
                        <h1>Your dashboard</h1>
                        <div className="flex">
                            <h2>Hi, Username</h2>
                        </div>
                    </div>
                    <div className="db-main">
                        <div className="layout-block acc-status">
                            <h2>Account status</h2>
                            <a className="item">
                                087 876 5433
                                <p>💚 Active</p>
                            </a>
                            <a className="item">
                                082 456 7789
                                <p>💛 Pending</p>
                            </a>
                            <a className="item">
                                082 456 1234
                                <p>💔 Reactivate <i className="uil uil-arrow-right" /></p>
                            </a>
                            <a >
                                <button>
                                    See full details <i className="uil uil-arrow-right" />
                                </button>
                            </a>
                        </div>
                        <div className="dashboard-layout">
                            <div className="layout-block">
                                <h2>Balance</h2>
                                <div className="item">
                                    <p>Data</p>
                                    <p>15GB</p>
                                </div>
                                <div className="item">
                                    <p>Airtime</p>
                                    <p>R120</p>
                                </div>
                                <div className="item">
                                    <p>Uber</p>
                                    <p>2 rides</p>
                                </div>
                                <a >
                                    <button>
                                        See full details <i className="uil uil-arrow-right" />
                                    </button>
                                </a>
                            </div>
                            <div className="layout-block">
                                <h2>Limes</h2>
                                <h3>R57</h3>
                                <a >
                                    <button>
                                        See full details <i className="uil uil-arrow-right" />
                                    </button>
                                </a>
                            </div>
                            <div className="layout-block">
                                <h2>Account details</h2>
                                <a className="item">
                                    Digital contract
                                    <i className="uil uil-arrow-right" />
                                </a>
                                <a className="item">
                                    Account details
                                    <i className="uil uil-arrow-right" />
                                </a>
                                <a >
                                    <button>
                                        See full details <i className="uil uil-arrow-right" />
                                    </button>
                                </a>
                            </div>
                            <div className="layout-block">
                                <h2>Transactions</h2>
                                <div className="item">
                                    <p>11/12/2022</p>
                                    <p>Wallet top-up</p>
                                </div>
                                <div className="item">
                                    <p>12/12/2022</p>
                                    <p>Wallet top-up</p>
                                </div>
                                <a >
                                    <button>
                                        See full details <i className="uil uil-arrow-right" />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="trending">
                            <h2>Trending products</h2>
                            <div className="grid-3">
                                <div>
                                    <h3>Uber</h3>
                                    <p>Get great deals on Uber rides and never have FOMO again.</p>
                                </div>
                                <div>
                                    <h3>Boomplay</h3>
                                    <p>Stream and download over 95M songs from top artists.</p>
                                </div>
                                <div>
                                    <h3>Recharge</h3>
                                    <p>Stream and download over 95M songs from top artists.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Dashboard