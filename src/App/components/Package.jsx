import React from 'react'
import Collapsible from './Collapsible'

function Package() {
    return (
        <div className="grid-2 packages" style={{ border: 'unset', paddingTop: 'unset' }}>
            <div className="package-wrap">
                <div className="package">
                    <h2>20GB / 20GB</h2>
                    <p>Day/Night anytime data</p>
                </div>
                <div className="tgl-main">

                    <Collapsible price="R599" time="3 months" ans="You’ll earn 63 Limes = R63" />
                    <Collapsible price="R1150" time="3 months" ans="You’ll earn 63 Limes = R63" />
                    <Collapsible price="R1150" time="12 months" ans="You’ll earn 63 Limes = R63" />

                </div>
            </div>
            <div className="package-wrap">
                <div className="package">
                    <h2>10GB / 20GB</h2>
                    <p>Day/Night anytime data</p>
                    <div className="trend">Trending</div>
                </div>
                <div className="tgl-main">

                    <Collapsible price="R499" time="3 months" ans="You’ll earn 38 Limes = R38" />
                    <Collapsible price="R950" time="6 months" ans="You’ll earn 63 Limes = R63" />
                    <Collapsible price="R1850" time="12 months" ans="You’ll earn 63 Limes = R63" />


                </div>
            </div>
        </div>
    )
}

export default Package