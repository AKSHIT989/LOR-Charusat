import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { RegistrationContext } from "../../../contexts/registration";
import { GET_DEPARTMENTS, GET_FACULTIES_HOD, GET_INSTITUTES } from "../../../queries";
import { decrypt, encrypt } from "../../../secure";

export default function PersonalDetails({ location }) {
  const { prevPath } = location;
  const history = useHistory();
  const [userInfo, setUserInfo] = useContext(RegistrationContext);
  const [institutes, setInstitutes] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [faculties, setFaculties] = useState([]);

  const handleOnChangeInstitute = (event) => {
    event.stopPropagation();
    getDepartments(event.target.value);
  };

  const handleOnChangeDepartment = (event) => {
    event.stopPropagation();
    getFaculties(userInfo.institute, event.target.value);
  };

  const handleOnChangeFaculty = (event) => {
    event.stopPropagation();
    setUserInfo({ ...userInfo, counsellor: event.target.value });
  }

  const isValid = () => {
    return userInfo.first_name.trim() !== '' && userInfo.last_name.trim() !== '' && userInfo.institute.trim() !== '' && userInfo.department.trim() !== '' && userInfo.counsellor.trim() !== '' && userInfo.hod.email && userInfo.hod.email.trim() !== '';
  }

  useEffect(() => {
    // Get all institutes
    if (prevPath === '/auth/register' || prevPath === '/auth/AccountDetails') {
    } else {
      history.replace('/auth/login');
    }
    getInstitutes();
  }, []);

  const getInstitutes = async () => {
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
            GET_INSTITUTES()
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      if (data) {
        setInstitutes([...data.getAllInstitutes]);
        if (data.getAllInstitutes.length > 0) {
          getDepartments(data.getAllInstitutes[0]);
        } else {
          setDepartments([]);
          setFaculties([]);
          setUserInfo({
            ...userInfo,
            institute: '',
            department: '',
            counsellor: '',
            hod: { name: '', email: '' },
          });
        }
      } else {
        setDepartments([]);
        setFaculties([]);
        setUserInfo({
          ...userInfo,
          institute: '',
          department: '',
          counsellor: '',
          hod: { name: '', email: '' },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getDepartments = async (institute) => {
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
            GET_DEPARTMENTS(institute)
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      if (data) {
        setDepartments([...data.getInstiDepartments]);
        if (data.getInstiDepartments.length > 0) {
          getFaculties(institute, data.getInstiDepartments[0]);
        } else {
          setFaculties([]);
          setUserInfo({
            ...userInfo,
            institute: institute || '',
            department: '',
            counsellor: '',
            hod: { name: '', email: '' },
          });
        }
      } else {
        setFaculties([]);
        setUserInfo({
          ...userInfo,
          institute: institute || '',
          department: '',
          counsellor: '',
          hod: { name: '', email: '' },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getFaculties = async (institute, department) => {
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
            GET_FACULTIES_HOD(institute, department)
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      let counsellorFlag = false;
      if (data) {
        if (data.getFacultiesHod.faculties) {
          setFaculties([...data.getFacultiesHod.faculties]);
          counsellorFlag = true;
        } else {
          setFaculties([]);
          setUserInfo({ ...userInfo, counsellor: '' });
        }
        if (data.getFacultiesHod.hod) {
          setUserInfo({
            ...userInfo,
            institute: institute,
            department: department,
            counsellor: counsellorFlag ? data.getFacultiesHod.faculties[0].email : '',
            hod: data.getFacultiesHod.hod,
          });
        } else {
          setUserInfo({
            ...userInfo,
            institute: institute || '',
            department: department || '',
            counsellor: counsellorFlag ? data.getFacultiesHod.faculties[0].email : '',
            hod: { name: '', email: '' },
          });
        }
      } else {
        setUserInfo({
          ...userInfo,
          institute: institute || '',
          department: department || '',
          counsellor: counsellorFlag ? data.getFacultiesHod.faculties[0].email : '',
          hod: { name: '', email: '' },
        });
      }
    } catch (err) {
      console.log(err);
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
                    Personal Details
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
                      First Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      name="first_name"
                      placeholder="First Name"
                      value={userInfo.first_name}
                      onChange={(event) => setUserInfo({ ...userInfo, first_name: event.target.value })}
                    />
                  </div>
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
                      name="last_name"
                      placeholder="Last Name"
                      value={userInfo.last_name}
                      onChange={(event) => setUserInfo({ ...userInfo, last_name: event.target.value })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Institute
                    </label>
                    <select
                      onChange={handleOnChangeInstitute}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      value={userInfo.institute}
                    >
                      {institutes.map((institute, index) =>
                        <option value={institute} key={`option-${index}`}>{institute}</option>
                      )}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Department
                    </label>
                    <select
                      onChange={handleOnChangeDepartment}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      value={userInfo.department}
                    >
                      {departments.map((department, index) =>
                        <option value={department} key={`option-${index}`}>{department}</option>
                      )}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      HOD
                    </label>
                    <input
                      type="text"
                      name="hod"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                      value={userInfo.hod.name}
                      disabled={true}
                      onChange={() => { }}
                    />
                  </div>
                  {
                    userInfo.user_type.toLowerCase() === 'student' ?
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Counsellor
                        </label>
                        <select
                          onChange={handleOnChangeFaculty}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          value={userInfo.counsellor}
                        >
                          {faculties.map((facultyObj, index) =>
                            <option value={facultyObj.email} key={`option-${index}`}>{facultyObj.name}</option>
                          )}
                        </select>
                      </div>
                      :
                      <></>
                  }
                  <div className="text-right mt-6">
                    <Link to="/auth/Register">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                        type="button"
                      >
                        Back
                      </button>
                    </Link>
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 w-auto ease-linear transition-all duration-150"
                      type="button"
                    >
                      {
                        isValid() ?
                          <Link to={{ pathname: '/auth/AccountDetails', prevPath: '/auth/personalDetails' }}>
                            Next
                          </Link> :
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
