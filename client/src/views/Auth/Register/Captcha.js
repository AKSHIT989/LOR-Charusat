import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Captcha({ location }) {
  const { prevPath } = location;
  const [disableNext, setDisableNext] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (prevPath === '/auth/AccountDetails') {
    } else {
      history.replace('/auth/login');
    }
  }, [history, prevPath]);

  const handleCaptchaChange = (captcha) => {
    if (captcha) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    One more step
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <ReCAPTCHA sitekey="6Le0vz4aAAAAAMU7pRDBx9L-l3QGqqf-9M1zfHwu" onChange={handleCaptchaChange} />
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-blue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div> */}
                  <div className="text-right mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                      type="button"
                    >
                      <Link to={{pathname: "/auth/AccountDetails", prevPath: "/auth/Captcha"}}>
                        Back
                      </Link>
                    </button>
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 w-auto ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                      type="button"
                      disabled={disableNext}
                    >
                      <Link to={{pathname: "/auth/VerifyEmail", prevPath: "/auth/Captcha"}}>
                        Next
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
