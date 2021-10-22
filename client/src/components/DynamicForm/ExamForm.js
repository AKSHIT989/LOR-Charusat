import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";
import FileInput from "../FileInput/FileInput";

export default function ExamForm({ data, onChange, onAdd, onDelete, onFileChange }) {
  const renderRows = () => {
    return data.map((obj, index) => {
      return (
        <tr key={"item-" + index}>
          <td>
            <select
              name="exam_name"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              onChange={(event) => onChange(event, index, obj.id)}
              value={obj.exam_name || ""}
            >
              <option value="GRE">GRE</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="GMAT">GMAT</option>
              <option value="GATE">GATE</option>
              <option value="CAT">CAT</option>
            </select>
          </td>
          <td>
            <input
              type="number"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Enter marks here"
              name="mark"
              value={obj.mark}
              onChange={(event) => onChange(event, index, obj.id)}
            />
          </td>
          <td>
            <FileInput
              name="upload_file"
              onChange={(event) => onFileChange(event, index, obj.id, obj.exam_name, obj.upload_file)}
              fileName={obj.upload_file}
            />
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
  }

  return (
    <>
      <InfoButton type="button" onClick={(event) => onAdd(event)} text="Add Item" />
      {/* </InfoButton> */}
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Exam Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Marks
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Upload Proof
              </th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
        <hr />
      </div>
    </>
  );
}
