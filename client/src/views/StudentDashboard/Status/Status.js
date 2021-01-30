import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function Status() {
  const header = [
    "Request Id",
    "Request Name",
    "Status",
    "Download LOR Request Form",
  ];

  const body = [
    [
      "Req 1",
      "LOR Request for Further Study",
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

  const title = "Approve Status"

  return <CardTable title={title} header={header} body={body} />;
}

export default Status;
