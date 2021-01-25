import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
// import TableDropdown from "../../assets";
import Argon from "../../assets/img/bootstrap.jpg";

export default function CardTable({ color, title, header, body }) {
  const thElements = header.map((headerName, index) => {
    return (
      <th
        className={
          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
          (color === "light"
            ? "bg-gray-100 text-gray-600 border-gray-200"
            : "bg-blue-800 text-blue-300 border-blue-700")
        }
        key={`h${index}`}
      >
        {headerName}
      </th>
    );
  });

  const trElements = body.map((row, rowIndex) => {
    const tdElements = row.map((cell, colIndex) => {
      return (
        <>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-no-wrap p-4">
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {rowIndex}
            </span>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-no-wrap p-4">
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {cell.id}
            </span>
          </td>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-no-wrap p-4 text-left flex items-center">
            <img
              src={Argon}
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            ></img>{" "}
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {cell.name}
            </span>
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-no-wrap p-4">
            <span
              className={
                "ml-3 font-bold " +
                +(color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {cell.sem}
            </span>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-no-wrap p-4 text-center">
            <TableDropdown />
          </td>
        </>
      );
    });
    return <tr key={`r${rowIndex}`}>{tdElements}</tr>;
  });

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>{thElements}</tr>
            </thead>
            <tbody>{trElements}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

