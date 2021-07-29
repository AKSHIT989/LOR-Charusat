import React, { useRef, useState } from "react";

function UserCreate() {
  const selectRef = useRef(null);
  const [state, setState] = useState({
    select: "Counsellor Name",
    id: "",
    name: "",
    department: "",
    institute: "",
    hodCounsName: "",
  });

  const handleChangeOnSelect = (event) => {
    event.stopPropagation();
    if (selectRef.current.value === "Student") {
      setState({ ...state, select: "Counsellor Name" });
    } else if (selectRef.current.value === "Faculty") {
      setState({ ...state, select: "HOD Name" });
    }
  };

  const handleChangeOnInput = (event) => {
    event.stopPropagation();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // Reducer
  const addUser = async (data) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        `http://localhost:1337/hod-create-users/`,
        options
      );
      const updatedData = await response.json();
      console.log(updatedData);
    } catch (e) {
      console.log(e);
    }
  }

  const handleClickOnButton = (event) => {
    event.stopPropagation();
    
    let fieldName = '';
    if (selectRef.current.value === "Student") {
      fieldName = "counsellor_name";
    } else if (selectRef.current.value === "Faculty") {
      fieldName = "hod_name";
    }

    const data = {
      c_id: state.id,
      name: state.name,
      department: state.department,
      institute: state.institute,
      [`${fieldName}`]: state.hodCounsName,
      role: selectRef.current.value,
    }
    
    addUser(data);
  }

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        {/* <button onClick={console.log("Hello")}>ggvh</button> */}
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
                    htmlFor="id"
                  >
                    Id
                  </label>
                  <input
                    type="text"
                    name="id"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter Id here "
                    value={state.id}
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.name}
                    placeholder="Enter Name here"
                    onChange={handleChangeOnInput}
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.department}
                    placeholder="Enter Department here"
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.institute}
                    placeholder="Enter Institute here"
                    onChange={handleChangeOnInput}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="hodCounsName"
                  >
                    {state.select}
                  </label>
                  <input
                    type="text"
                    name="hodCounsName"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    value={state.hodCounsName}
                    placeholder="Enter Counsellor Name here"
                    onChange={handleChangeOnInput}
                  />
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

/* 
<div className="w-full lg:w-6/12 px-4 py-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="flex flex-wrap mt-6">
            <div className="w-full px-4">
              <div className="relative mb-3 flex justify-end align-center">
                <select
                  ref={selectRef}
                  onChange={handleOnChange}
                  className="bg-gray-200 focus:outline-none cursor-pointer"
                >
                  <option>Student</option>
                  <option>Faculty</option>
                </select>
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Id"
                >
                  Id
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Department"
                >
                  Department
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Institute"
                >
                  Institute
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor={state}
                >
                  {state}
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue=""
                />
              </div>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
