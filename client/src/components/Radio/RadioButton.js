import React from 'react'

function RadioButton(props) {
    return (
        <span className="radio-button">
        <input type="radio" className="ml-3" name={props.name} checked={props.checked} onChange={props.onChange}/>
        <label className="radio-container ml-1"/>{props.text}
        </span>
    )
}

export default RadioButton
