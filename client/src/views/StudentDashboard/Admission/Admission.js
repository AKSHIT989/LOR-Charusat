import React,{useState} from 'react'

import SecondaryButtonOutline from '../../../components/Button/SecondaryButtonOutline'
import InfoButton from "../../../components/Button/InfoButton"
import PrimaryButton from "../../../components/Button/PrimaryButton"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import '../../../assets/styles/external.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ExamForm from "../../../components/DynamicForm/ExamForm"
import UniversityForm from "../../../components/DynamicForm/UniversityForm"
import "react-datepicker/dist/react-datepicker.css"
function Admission({history}) {
    const [startDate, setStartDate] = useState();
    const [userPhoneNumber, setUserPhoneNumber] = useState()
    const [parentPhoneNumber, setParentPhoneNumber] = useState()

    return (
        // <div>
        <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                {/* <button onClick={console.log("Hello")}>ggvh</button> */}
            <div className="rounded-t bg-white mb-0 px-6 py-6 text-center flex justify-between">
                <h6 className="text-gray-800 text-xl font-bold">Admission Card</h6>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={(e)=>e.preventDefault()}>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
                </h6>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Id No.
                    </label>
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // defaultValue="jesse@example.com"
                        placeholder="Enter Email here"
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // defaultValue="Lucky"
                        placeholder="Enter First Name here"
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // defaultValue="Jesse"
                        placeholder="Enter last name here"
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Pass-out Month/Year
                    </label>
                    <div className="customDatePickerWidth">
                        <DatePicker
                        className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        dateFormat="MMMM yyyy"
                        placeholderText="Select Date here"
                        showMonthYearPicker
                        selected={startDate}
                        onChange={setStartDate}
                        peekNextMonth
                        />
                    </div>

                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        User Mobile Number
                    </label>
                    <PhoneInput
                    inputClass="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        country= "in" 
                        inputStyle={{width:"100%"}}
                        placeholder="Enter phone number"
                        value={userPhoneNumber}/>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Parent's Mobile Number
                    </label>
                    <PhoneInput
                        country="in"
                        enableSearch={true}
                        inputStyle={{width:"100%"}}
                        placeholder="Enter phone number"
                        value={parentPhoneNumber}
                        onChange={setParentPhoneNumber}/>
                    </div>
                    </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />

                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Competitive Exam Details
                </h6>
                <ExamForm/>

                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                University Preference List
                </h6>
                <UniversityForm/>

                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Terms and mailing
                </h6>
                <input type="checkbox"/><label className="ml-2">I hereby declare that the details furnished above are true</label>

                <hr className="mt-6 border-b-1 border-gray-400" />

                <div className="rounded-t mb-0 py-6 text-center flex justify-between w-full lg:w-12/12 overflow-x-auto">
                {/* <div> */}
                <PrimaryButton text = "Submit"/>
                {/* </div> */}
                <InfoButton text = "Save" />
                <SecondaryButtonOutline text = "Cancel" />
            </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Admission
