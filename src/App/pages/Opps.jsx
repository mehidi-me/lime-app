import React from 'react'
import Layouts from '../layouts'
import Sad from "../images/Isometric Stickers Sad.png"
import Calendar from "../images/Isometric Stickers Calendar.png"


function Opps() {
    return (
        <Layouts FooterImage={Calendar}>
            <main>
                <div className="container">
                    <div className="grid-2 ddd">
                        <div className="typo db">
                            <h1>Oops!</h1>
                            <h2>Your payment was unsuccessful 💔</h2>
                            <button>Try again</button>
                        </div>
                        <img src={Sad} alt="" />
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default Opps