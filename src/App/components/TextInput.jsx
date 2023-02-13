import React, { useState } from 'react'

function TextInput(props) {
    const [textFieldValue, setTextFieldValue] = useState("")
    return (
        <>
            <input {...props} value={textFieldValue} onChange={e => setTextFieldValue(e.target.value)} />
            {textFieldValue ? <div className="cut" onClick={() => setTextFieldValue("")} style={{ cursor: 'pointer' }}>
                <span className="material-icons"> cancel </span>
            </div> : null}
        </>
    )
}

export default TextInput