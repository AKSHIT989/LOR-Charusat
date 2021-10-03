import React from "react";
import { Link } from "react-router-dom";

export default function PersonalDetails() {
  const [selectedInstitute, setSelectedInstitute] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("");

  const CSPIT = [
    "BTECH(CE)",
    "BTECH(CL)",
    "BTECH(CS)",
    "BTECH(EC)",
    "BTECH(EE)",
    "BTECH(IT)",
    "BTECH(ME)",
    "DRCE",
    "DRCL",
    "DREC",
    "DREE",
    "DRME",
    "MTECH(AMT)",
    "MTECH(CE)",
    "MTECH(CL)",
    "MTECH(CSE)",
    "MTECH(EC)",
    "MTECH(EE)",
    "MTECH(EVD)",
    "MTECH(ICT)",
    "MTECH(IT)",
    "MTECH(ME)",
    "MTECH(PE)",
    "MTECH(TE)",
    "MTM",
    "PGDCS",
  ];

  const changeSelectInstituteHandler = (event) => {
    setSelectedInstitute(event.target.value);
  };
  const changeSelectDepartmentHandler = (event) => {
    setSelectedDepartment(event.target.value);
  };

  let type = null;
  let options = null;
  if (selectedInstitute === "CSPIT") {
    type = CSPIT;
  } else if (selectedInstitute === "Language") {
    type = CSPIT;
  } else if (selectedInstitute === "Data Structure") {
    type = CSPIT;
  }

  if (type) {
    options = type.map((insititute) => (
      <option value={insititute} key={insititute}>
        {insititute}
      </option>
    ));
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
                      placeholder="Name"
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
                      placeholder="Name"
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
                      name="Institutes"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      onChange={changeSelectInstituteHandler}
                    >
                      <option value="" disabled selected hidden>
                        Select Institute
                      </option>
                      <option value="CSPIT">CSPIT</option>
                      <option value="CMPICA">CMPICA</option>
                      <option value="RPCP">RPCP</option>
                      <option value="IIIM">IIIM</option>
                      <option value="PDPIAS">PDPIAS</option>
                      <option value="ARIP">ARIP</option>
                      <option value="MTIN">MTIN</option>
                      <option value="CIPS">CIPS</option>
                      <option value="DEPSTAR">DEPSTAR</option>
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
                      name="Departments"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      onChange={changeSelectDepartmentHandler}
                    >
                      <option value="" disabled selected hidden>
                        Select Department
                      </option>
                      {options}
                    </select>
                  </div>

                  <div className="text-right mt-6">
                    <Link to="/auth/Register">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  transition-all duration-150"
                        type="button"
                      >
                        Back
                      </button>
                    </Link>

                    <Link to="/auth/AccountDetails">
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
