import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RegistrationContext } from "../../../contexts/registration";

export default function AccountDetails({ location }) {
  const { prevPath } = location;
  const history = useHistory();
  const [userInfo, setUserInfo] = useContext(RegistrationContext);

  useEffect(() => {
    if (prevPath === '/auth/personalDetails' || prevPath === '/auth/Captcha') {
    } else {
      history.replace('/auth/login');
    }
  }, [history, prevPath]);

  const isValid = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Min 8 chars, atleast 1 upper, 1 lower, 1 number and 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return emailRegex.test(userInfo.email) && passwordRegex.test(userInfo.password) && userInfo.password === userInfo.confirm_password && userInfo.mobile !== ''
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
                    Account Details
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
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name='email'
                      value={userInfo.email || ''}
                      onChange={(event) => setUserInfo({ ...userInfo, email: event.target.value })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone no.
                    </label>
                    <PhoneInput
                      country={'in'}
                      value={userInfo.mobile || ''}
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                      inputClass="px-3 py-3 placeholder-gray-400 h-12 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      onChange={(value) => setUserInfo({ ...userInfo, mobile: `+${value}` })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      name="password"
                      value={userInfo.password || ''}
                      onChange={(event) => setUserInfo({ ...userInfo, password: event.target.value })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={userInfo.confirm_password || ''}
                      onChange={(event) => setUserInfo({ ...userInfo, confirm_password: event.target.value })}
                    />
                  </div>
                  <div className="text-right mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                      type="button"
                    >
                      <Link to={{pathname: "/auth/PersonalDetails", prevPath: "/auth/AccountDetails"}}>
                        Back
                      </Link>
                    </button>
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 w-auto ease-linear transition-all duration-150"
                      type="button"
                    >
                      {
                        isValid() ?
                          <Link to={{ pathname: "/auth/Captcha", prevPath: '/auth/AccountDetails' }}>
                            Next
                          </Link>
                          :
                          "Next"
                      }
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
