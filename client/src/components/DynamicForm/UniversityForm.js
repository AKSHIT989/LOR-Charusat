import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function UniversityForm({ data, onChange, onAdd, onDelete }) {
  const renderRows = () => {
    return data.map((obj, index) => {
      return (
        <tr key={"item-" + index}>
          <td>
            <input
              type="text"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="University Name here"
              name="university_name"
              value={obj.university_name}
              onChange={(event) => onChange(event, index, obj.id)}
            ></input>
          </td>
          <td>
            <input
              type="text"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Course Name here"
              name="course_name"
              value={obj.course_name}
              onChange={(event) => onChange(event, index, obj.id)}
            />
          </td>
          <td>
            <input
              type="text"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Country Name here"
              name="country_name"
              value={obj.country_name}
              onChange={(event) => onChange(event, index, obj.id)}
            />
          </td>
          <td>
            <div className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150">
              <DatePicker
                placeholderText="Select date here"
                dateFormat="MMM/yyyy"
                showMonthYearPicker
                name="intake_date"
                selected={obj.intake_date}
                onChange={(date, event) => onChange(event, index, obj.id, date.getTime())}
              />
            </div>
          </td>
          <td>
            <div>
              <SecondaryButtonOutline
                onClick={(event) => onDelete(event, index, obj.id)}
                text="Delete"
              ></SecondaryButtonOutline>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <InfoButton
        type="button"
        onClick={(event) => onAdd(event)}
        text="Add Item"
      />
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                University Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Course Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Country Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Intake(Month-Year)
              </th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
        <hr />
      </div>
    </>
  );
}
