import React from 'react'

function Package() {
    return (
        <div className="grid-2 packages" style={{ border: 'unset', paddingTop: 'unset' }}>
            <div className="package-wrap">
                <div className="package">
                    <h2>20GB / 20GB</h2>
                    <p>Day/Night anytime data</p>
                </div>
                <div className="tgl-main">
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R599</span> once-off supplied over
                                <span>3 months</span>
                            </p>
                            <i className="uil uil-angle-up" />
                        </div>
                        <div className="ans active">
                            <p>You’ll earn 63 Limes = R63</p>
                        </div>
                    </div>
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R1150</span> once-off supplied over
                                <span>3 months</span>
                            </p>
                            <i className="uil uil-angle-down" />
                        </div>
                        <div className="ans">
                            <p>You’ll earn 63 Limes = R63</p>
                        </div>
                    </div>
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R2250</span> once-off supplied over
                                <span>12 months</span>
                            </p>
                            <i className="uil uil-angle-down" />
                        </div>
                        <div className="ans">
                            <p>You’ll earn 63 Limes = R63</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="package-wrap">
                <div className="package">
                    <h2>10GB / 20GB</h2>
                    <p>Day/Night anytime data</p>
                    <div className="trend">Trending</div>
                </div>
                <div className="tgl-main">
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R499</span> once-off supplied over
                                <span>3 months</span>
                            </p>
                            <i className="uil uil-angle-up" />
                        </div>
                        <div className="ans active">
                            <p>You’ll earn 38 Limes = R38</p>
                        </div>
                    </div>
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R950</span> once-off supplied over
                                <span>6 months</span>
                            </p>
                            <i className="uil uil-angle-down" />
                        </div>
                        <div className="ans">
                            <p>You’ll earn 63 Limes = R63</p>
                        </div>
                    </div>
                    <div className="tgl">
                        <div className="collaps">
                            <p>
                                Starts at <span>R1850</span> once-off supplied over
                                <span>12 months</span>
                            </p>
                            <i className="uil uil-angle-down" />
                        </div>
                        <div className="ans">
                            <p>You’ll earn 63 Limes = R63</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package