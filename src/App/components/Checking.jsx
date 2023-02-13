import React from 'react'

function Checking() {
    return (
        <div className="checking">
            <form action="#">
                <label htmlFor="num">Add up to three numbers</label>
                <div className="item">
                    <div className="input">
                        <input type="tel" placeholder="Enter number here" />
                        <div className="cut">
                            <span className="material-icons"> cancel </span>
                        </div>
                    </div>
                    <div className="add">
                        <span className="material-icons-outlined"> add </span>
                    </div>
                </div>
                <button>Verify</button>
                <p>Deals only available prepaid MTN customers</p>
            </form>
        </div>
    )
}

export default Checking