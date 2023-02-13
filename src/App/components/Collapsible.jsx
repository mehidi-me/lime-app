import React, { useState } from 'react'

function Collapsible({ price, time, ans }) {
    const [isExpanded, setisExpanded] = useState(false)
    return (
        <div className="tgl">
            <div className="collaps" onClick={() => setisExpanded(pre => !pre)}>
                <p>
                    Starts at <span>{price}</span> once-off supplied over
                    <span>{time}</span>
                </p>
                <i className={isExpanded ? "uil uil-angle-up" : "uil uil-angle-down"} />
            </div>
            <div className={isExpanded ? "ans active" : "ans"}>
                <p>{ans}</p>
            </div>
        </div>
    )
}

export default Collapsible