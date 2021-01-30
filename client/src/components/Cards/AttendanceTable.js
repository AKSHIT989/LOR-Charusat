import React from "react";
import PropTypes from "prop-types";

export default function AttendanceTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded " 
          // (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse" >
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Semester
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 1
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 2
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 3
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 4
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 5
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 6
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 7
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sem 8
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  
                    Attendance
                </th>
                {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $2,500 USD
                </td> */}
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                </tr>
              
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  {/* <img
                    // src={}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "} */}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    CGPA
                  </span>
                </th>
                {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $2,500 USD
                </td> */}
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <input
                        type="number"
                        className="px- py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        // placeholder="Enter ID No. here "
                        // defaultValue="Enter your ID No. here"
                    />  
                </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

AttendanceTable.defaultProps = {
  color: "light",
};

AttendanceTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
