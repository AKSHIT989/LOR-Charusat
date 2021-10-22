import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";
import FileInput from "../FileInput/FileInput";

export default function FacultyForm({
  data,
  facultyList,
  onChange,
  onAdd,
  onDelete,
  onFileChange
}) {
  const renderRows = () => {
    return data.map((obj, index) => {
      return (
        <tr key={"item-" + index}>
          <td>
            <select
              name="faculty"
              onChange={(event) => onChange(event, index, obj.id)}
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              value={obj.faculty_email || ""}
            >
              {facultyList.map((faculty, idx) => (
                <option
                  value={faculty.email}
                  key={`option-${idx}`}
                  // selected={obj.faculty_email === faculty.email}
                >
                  {faculty.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <FileInput 
              name="stu_upload"
              onChange={(event) => onFileChange(event, index, obj.id, obj.faculty_email, obj.stu_upload)}
              fileName={obj.stu_upload}
            />
            {/* <input
              type="file"
              accept="application/pdf"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus]:shadow-outline w-full ease-linear transition-all duration-150"
              name="stu_upload"
              onChange={(event) => onFileChange(event, index, obj.id, obj.faculty_email, obj.stu_upload)}
            ></input> */}
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
                Faculty
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Upload LOR
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
