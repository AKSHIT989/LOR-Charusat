import React, { useContext, useEffect, useRef, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { UserContext } from "../../../contexts/user";
import { ADD_USER, GET_FACULTY_LIST } from "../../../queries";
import { decrypt, encrypt } from "../../../secure";

function UserCreate() {
  const selectRef = useRef(null);
  const [user] = useContext(UserContext);
  const [facultyList, setFacultyList] = useState([]);
  const [state, setState] = useState({
    charusatId: "",
    email: "",
    firstName: "",
    lastName: "",
    counsellor: "",
    mobile: "",
    disableCounsellor: false,
  });

  useEffect(() => {
    const getFacultyList = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${user.access_token}`,
          },
          body: JSON.stringify({
            text: encrypt(
              GET_FACULTY_LIST(
                user.user_id,
                user.user_type,
                user.institute,
                user.department
              )
            ),
          }),
        });
        const result = await response.json();
        const { data } = JSON.parse(decrypt(result.text));
        // console.log(data);
        setFacultyList(data.getFaculties || []);
        setState({...state, counsellor: data.getFaculties[0].email});
        // return  data.authenticateUser;
      } catch (err) {
        console.log(err);
      }
    };
    getFacultyList();
  }, []);

  const handleChangeOnSelect = (event) => {
    event.stopPropagation();
    if (selectRef.current.value === "Student") {
      // GET faculty list
      setState({...state, disableCounsellor: false});
    } else if (selectRef.current.value === "Faculty") {
      setState({ ...state, disableCounsellor: true });
    }
  };

  const handleChangeOnCounsellor = (event) => {
    event.stopPropagation();
    // console.log(event.target.value);
    setState({...state, counsellor: event.target.value});
  }

  const handleChangeOnInput = (event) => {
    event.stopPropagation();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeOnPhone = (value) => {
    setState({...state, mobile: `+${value}`});
  }

  // Reducer
  const addUser = async (userInfo) => {
    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.access_token}`
        },
        body: JSON.stringify({
          text: encrypt(ADD_USER(user.user_id, user.user_type, userInfo))
        }),
      };

      await fetch(
        `http://127.0.0.1:3001/graphql`,
        options
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickOnButton = (event) => {
    event.stopPropagation();

    const data = {
      charusat_id: state.charusatId,
      user_type: selectRef.current.value,
      email: state.email,
      first_name: state.firstName,
      last_name: state.lastName,
      institute: user.institute,
      department: user.department,
      counsellor: state.disableCounsellor ? '' : state.counsellor,
      hod: user.email,
      mobile: state.mobile,
      password: Math.random().toString(36).slice(-8),
    };

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(state.email)) {
      addUser(data);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">Create User</h6>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6> */}
            <div className="relative mt-3 mb-6 flex justify-end align-center px-4">
              <select
                ref={selectRef}
                onChange={handleChangeOnSelect}
                className="bg-gray-200 focus:outline-none cursor-pointer"
              >
                <option>Student</option>
                <option>Faculty</option>
              </select>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="charusatId"
                  >
                    charusat id
                  </label>
                  <input
                    type="text"
                    name="charusatId"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter CHARUSAT Id here "
                    value={state.charusatId}
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.email}
                    placeholder="Enter Email here"
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.firstName}
                    placeholder="Enter First Name here"
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.lastName}
                    placeholder="Enter Last Name here"
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="institute"
                  >
                    Institute
                  </label>
                  <input
                    type="text"
                    name="institute"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                    value={user.institute}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                    value={user.department}
                    disabled={true}
                  />
                </div>
              </div>
              <div className={`w-full lg:w-6/12 px-4 ${state.disableCounsellor ? 'hidden' : ''}`}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="counsellor"
                  >
                    Counsellor
                  </label>
                  <select
                    disabled={state.disableCounsellor}
                    onChange={handleChangeOnCounsellor}
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 cursor-pointer"
                  >
                    {facultyList.map((faculty, index) => (
                      <option
                        value={faculty.email}
                        key={`option-${index}`}
                      >
                        {faculty.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="hod"
                  >
                    HOD
                  </label>
                  <input
                    type="text"
                    name="hod"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                    value={`${user.first_name} ${user.last_name}`}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="mobile"
                  >
                    Phone No.
                  </label>
                  {/* <input
                    type="text"
                    name="mobile"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.mobile}
                    placeholder="Enter Phone No. here"
                    onChange={handleChangeOnInput}
                  /> */}
                  <PhoneInput
                    inputClass="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        country= "in" 
                        inputStyle={{width:"100%"}}
                        placeholder="Enter phone number"
                        value={state.mobile}
                        inputProps={{name: "mobile"}}
                        onChange={handleChangeOnPhone}/>
                </div>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mx-4 ease-linear transition-all duration-150"
              type="button"
              onClick={handleClickOnButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
