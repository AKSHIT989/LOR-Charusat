import React, { useRef, useState } from "react";

function UserCreate({ fields }) {
  const [state, setState] = useState("Counsellor Name");
  const selectRef = useRef(null);
  const handleOnChange = (event) => {
    event.stopPropagation();
    if (selectRef.current.value === "Student") {
      setState("Counsellor Name");
    } else if (selectRef.current.value === "Faculty") {
      setState("HOD Name");
    }
  };

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
                onChange={handleOnChange}
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter Id here "
                    // defaultValue="Enter your ID No. here"
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
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    // defaultValue="jesse@example.com"
                    placeholder="Enter Name here"
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                    placeholder="Enter Department here"
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    // defaultValue="Jesse"
                    placeholder="Enter Institute here"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
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
                    // defaultValue="Jesse"
                    placeholder="Enter Counsellor Name here"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mx-4 ease-linear transition-all duration-150"
              type="button"
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
