import React, { useState } from 'react'
import TextInput from './TextInput';

function Checking() {
    const [numberCount, setNumberCount] = useState([]);
    const addField = (type, id) => {
        setNumberCount(pre => {
            let currentFiled = [...pre];
            if (type === 'add') {
                if (currentFiled.length < 2) {

                    currentFiled.push({ id: currentFiled.length });
                }
            } else {
                currentFiled = currentFiled.filter(v => v.id !== id)
            }
            // console.log(currentFiled, id)
            return currentFiled
        })



    }


    return (
        <div className="checking">
            <form action="#">
                <label htmlFor="num">Add up to three numbers</label>
                <div className="item">
                    <div className="input">

                        <TextInput type="tel" placeholder="Enter number here" />
                    </div>
                    <div className="add" onClick={() => addField('add')}>
                        <span className="material-icons-outlined"> add </span>
                    </div>
                </div>
                {numberCount.map((v, index) => (
                    <div className="item" key={index}>
                        <div className="input">

                            <TextInput type="tel" placeholder="Enter number here" />
                        </div>


                        <div className="add" onClick={() => addField('remove', v.id)} style={{ backgroundColor: "var(--pink)" }}>
                            <span className="material-icons-outlined"> close </span>
                        </div>
                    </div>
                ))}

                <button>Verify</button>
                <p>Deals only available prepaid MTN customers</p>
            </form>
        </div>
    )
}

export default Checking