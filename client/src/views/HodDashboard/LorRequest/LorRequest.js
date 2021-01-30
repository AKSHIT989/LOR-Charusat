import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function LorRequest() {
  const header = [
    "#",
    "Request Id",
    "Student Id",
    "Student Name",
    "Status",
    "Remarks",
    "View/Download LOR",
  ];

  const body = [
    [
      <input type="checkbox" />,
      "Req 1",
      "17CE001",
      "Navdeep Dadhania",
      "Verified by Counsellor",
      <>
        <input
          defaultValue={"Change on line 22..."}
          name={""}
          className="border-none outline-none h-10"
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
      <input type="checkbox" />,
      "Req 2",
      "17CE002",
      "Nihal Shaikh",
      "Verified by TPR",
      <>
        <input
          defaultValue={"Change on line 23..."}
          name={``}
          className="border-none outline-none h-10"
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
      <input type="checkbox" />,
      "Req 3",
      "17CE003",
      "Akshit Soneji",
      "Verified by Counsellor, TPR",
      <>
        <input
          defaultValue={"N/A"}
          className="border-none outline-none h-10"
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

  const title = "LOR Request";

  
  return (
    <>
      <CardTable title={title} header={header} body={body} />
      <button
        className="bg-blue-500 w-max float-right text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
      >
        Approve
      </button>
    </>
  );
}

export default LorRequest;
