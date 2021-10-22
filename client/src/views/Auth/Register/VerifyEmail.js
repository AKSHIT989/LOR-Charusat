import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationContext } from "../../../contexts/registration";
import { GET_OTP, REGISTER_USER } from "../../../queries";
import { decrypt, encrypt } from "../../../secure";

export default function VerifyEmail({ location }) {
  const { prevPath } = location;
  const history = useHistory();
  const [userInfo] = useContext(RegistrationContext);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [waitingSeconds, setWaitingSeconds] = useState(100);

  useEffect(() => {
    if (prevPath === '/auth/Captcha') {
    } else {
      history.replace('/auth/login');
    }

    const userEmailSubStr = userInfo.email.substr(userInfo.email.indexOf('@'));
    const astrerixString = '*'.repeat(3);
    setEmail(astrerixString + userEmailSubStr);
  }, [history, prevPath, userInfo.email]);

  const getOtp = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          text: encrypt(
            GET_OTP(userInfo.email)
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      if (data) {
        let time = 100;
        const handle = setInterval(() => {
          setWaitingSeconds(--time);
        }, 1000);
        setTimeout(() => {
          clearInterval(handle);
        }, 100000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const registerUser = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          text: encrypt(
            REGISTER_USER(parseInt(otp), userInfo)
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      if (data.registerUser) {
        window.location.pathname = '/auth/login';
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnClickDone = (event) => {
    event.stopPropagation();
    if (userInfo.user_type.toLowerCase() === 'faculty') {
      userInfo.counsellor = '';
    }
    userInfo.hod = userInfo.hod.email;
    registerUser();
  }

  const handleClickOnSendOTP = () => {
    getOtp();
  }

  const handleChangeInOtp = (event) => {
    setOtp(event.target.value);
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
                    Verify your Email
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
                        We have sent a code to {email}
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
                      value={otp}
                      onChange={handleChangeInOtp}
                    />
                  </div>
                  {
                    waitingSeconds > 0 && waitingSeconds < 100 ?
                      <div className="relative w-full mb-3">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Didn't receive it? Please wait for {waitingSeconds} seconds
                        </label>
                      </div>
                      : <></>
                  }
                  <div className="text-right mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                      type="button"
                      disabled={waitingSeconds > 0 && waitingSeconds < 100}
                      onClick={handleClickOnSendOTP}
                    >
                      Send OTP
                    </button>
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                      type="button"
                      onClick={handleOnClickDone}
                    >
                      Done
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
