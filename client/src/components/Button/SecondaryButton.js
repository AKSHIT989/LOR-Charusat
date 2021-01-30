import React from 'react'

function SecondaryButton(props) {
    return (
        <button
        className="bg-red-600 text-white active:bg-red-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        onClick={props.onClick}
        >
        {props.text}
    </button>
    )
}

export default SecondaryButton
