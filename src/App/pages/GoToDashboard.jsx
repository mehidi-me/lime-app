import React from 'react'
import Layouts from '../layouts'
import Smile from "../images/Isometric Stickers Smile.png"
import Calendar from "../images/Isometric Stickers Calendar.png"


function GoToDashboard() {
    return (
        <Layouts FooterImage={Calendar}>
            <main>
                <div className="container">
                    <div className="grid-2 ddd">
                        <div className="typo db">
                            <h1>You did it, username!</h1>
                            <h2>
                                Thank you for choosing us 💚 <br />
                                Your package will be activated in the next 2—3 days. Go to your
                                dashboard for a detailed view.
                            </h2>
                            <button>Go to dashboard</button>
                        </div>
                        <img src={Smile} alt="" />
                    </div>
                </div>
            </main>

        </Layouts>
    )
}

export default GoToDashboard