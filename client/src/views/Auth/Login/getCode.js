import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GetCode() {
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
                    Verify your identity
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        We have sent a code to {Email}
                      </label>
                    </div>
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter Code
                    </label>
                    <input
                      type="number"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Enter Code"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Didn't receive it? Please wait for few minutes or{" "}
                      <a href="#none" className="text-blue-400">
                        Resend Code?
                      </a>
                    </label>
                  </div>

                  <div className="text-right mt-6">
                    <Link to="/auth/forgotPassword">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                        type="button"
                      >
                        Back
                      </button>
                    </Link>

                    <Link to="/auth/ResetPassword">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 w-auto ease-linear transition-all duration-150"
                        type="button"
                      >
                        Next
                      </button>
                    </Link>
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
