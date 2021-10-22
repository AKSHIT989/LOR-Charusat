import React from "react";
import PropTypes from "prop-types";

export default function AttendanceTable({ color, data, onChange }) {
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
          <table className="items-center w-full bg-transparent border-collapse">
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
                {data.map((obj) => (
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                      (color === "light"
                        ? "bg-gray-100 text-gray-600 border-gray-200"
                        : "bg-blue-800 text-blue-300 border-blue-700")
                    }
                  >
                    {`Sem ${obj.sem}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  Attendance
                </th>
                {data.map((obj, index) => (
                  <td className="border-t-0 px- align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    <input
                      type="number"
                      className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      name="attendance"
                      value={obj.attendance ? obj.attendance : ""}
                      onChange={(event) =>
                        onChange(event, index, obj.id ? obj.id : undefined)
                      }
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    CGPA
                  </span>
                </th>
                {data.map((obj, index) => (
                  <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4" key={`col-${index}`}>
                    <input
                      type="number"
                      className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      name="cgpa"
                      value={obj.cgpa ? obj.cgpa : ""}
                      onChange={(event) => onChange(event, index, obj.id ? obj.id : undefined)}
                    />
                  </td>
                ))}
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
