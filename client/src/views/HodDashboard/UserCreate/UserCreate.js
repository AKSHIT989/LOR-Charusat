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
    <div className="w-full lg:w-8/12 px-4 py-4">
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
  );
}

export default UserCreate;

/* 
<div className="relative mb-3">
    <label
    className="w-max uppercase text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-password"
    >
    <input type="radio" className="mr-4 bg-white focus:outline-none" />
    Student
    </label>
</div>
*/
