import React from 'react'

function PrimaryButton(props) {
    return (
        <button
        className="bg-green-600 text-white active:bg-green-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
        >
        {props.text}
    </button>
    )
}

export default PrimaryButton
