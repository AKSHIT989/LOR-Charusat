import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function Status() {
  const header = [
    "Request Id",
    "Request Name",
    "Date",
    "Status",
    "Download LOR Request Form",
  ];

  const body = [
    [
      "Req 1",
      "LOR Request for Further Study",
      "25/12/20",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        Download
      </a>,
    ],
    [
      "Req 2",
      "LOR Request for Further Study",
      "10/1/21",
      <>
        <i className="fas fa-circle text-green-500 mr-2"></i> Completed
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        Download
      </a>,
    ],
    [
      "Req 3",
      "LOR Request for Further Study",
      "20/1/21",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        Download
      </a>,
    ],
  ];

  return <CardTable title="LOR Requests" header={header} body={body} />;
}

export default Status;
