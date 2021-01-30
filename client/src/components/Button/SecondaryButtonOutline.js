import React from 'react'

function index(props) {
    return (
        <button
            className="text-red-500 hover:bg-red-600 hover:text-white active:bg-red-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            style={{border:"2px solid red "}}
            onClick={props.onClick}
            >
            {props.text}
        </button>
    )
}

export default index
