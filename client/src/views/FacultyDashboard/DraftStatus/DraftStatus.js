import React, { useState } from "react";
import CardTable from "../../../components/Cards/CardTable";

function DraftStatus() {
  let i = 0;
  let stateInit = {};
  // Consider values from DB
  let inputValues = ["Change in line 22...", "Change in line 23...", "N/A"];
  inputValues.forEach((value, index) => {
    stateInit[`i${index}`] = value;
  });

  const [state, setState] = useState(stateInit);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const header = [
    "Request Id",
    "Student Id",
    "Student Name",
    "Status",
    "Remarks",
    "View/Download LOR",
  ];

  const body = [
    [
      "Req 1",
      "17CE001",
      "Navdeep Dadhania",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
    [
      "Req 2",
      "17CE002",
      "Nihal Shaikh",
      <>
        <i className="fas fa-circle text-green-500 mr-2"></i> Complete
      </>,
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
    [
      "Req 3",
      "17CE003",
      "Akshit Soneji",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
  ];

  return <CardTable header={header} body={body} />;
}

export default DraftStatus;
