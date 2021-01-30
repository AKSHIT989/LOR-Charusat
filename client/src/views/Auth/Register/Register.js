import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3"> 
                  <h6 className="text-gray-600 text-lg font-bold">
                    Create account
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form>

                <div className="relative w-full mb-3">
                    <input
                      type="radio"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-5 ease-linear transition-all duration-150"
                    /> 
                    Student  

                    <input
                      type="radio"
                      style={{marginLeft:"15%"}}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-5 ease-linear transition-all duration-150"
                    /> 
                    Faculty 
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Charusat ID
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Charusat ID"
                    />
                  </div>

                  <div className="text-right mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto ease-linear transition-all duration-150"
                      type="button"
                    >
                     <Link to="/auth/PersonalDetails">
                      Next
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-full">
              Already member?
              <Link to="/auth/login" className="text-blue-600">
                  Login Here
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

