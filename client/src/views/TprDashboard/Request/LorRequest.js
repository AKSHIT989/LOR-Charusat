import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function LorRequest() {
  const header = [
    "Request Id",
    "Student Id",
    "Student Name",
    "Status",
    "View Details",
  ];

  const body = [
    [
      "Req 1",
      "17CE001",
      "Navdeep Dadhania",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View
      </a>,
    ],
    [
      "Req 2",
      "17CE002",
      "Nihal Shaikh",
      <>
        <i className="fas fa-circle text-green-500 mr-2"></i> Complete
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View
      </a>,
    ],
    [
      "Req 3",
      "17CE003",
      "Akshit Soneji",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View
      </a>,
    ],
  ];

  return <CardTable header={header} body={body} />;
}

export default LorRequest;
