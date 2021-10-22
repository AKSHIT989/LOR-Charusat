import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [Email] = useState("*******@gmail.com")
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3"> 
                  <h6 className="text-gray-600 text-lg font-bold">
                    We need to verify your Identity
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      How would you like to get your security code?
                    </label>
                    <input
                      type="radio"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-5 ease-linear transition-all duration-150"
                    /> 
                    Email to {Email}
                  </div>

                  <div className="text-right mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                      type="button"
                    >
                       <Link to="/">
                        Cancel
                    </Link>
                    </button>

                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 w-auto ease-linear transition-all duration-150"
                      type="button"
                    >

                    <Link to="/auth/getCode">
                        Get Code
                    </Link>
                      
                    </button>

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
