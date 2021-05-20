import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function DraftStatus() {
  const header = ["Draft Id", "Faculty Name", "Status", "Remarks"];
  const body = [
    [
      "Draft 1",
      "Mrugedra Rahevar",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      "Change on line 22...",
    ],
    [
      "Draft 2",
      "Martin Parmar",
      <>
        <i className="fas fa-circle text-green-500 mr-2"></i> Completed
      </>,
      "Change on line 23...",
    ],
    [
      "Draft 3",
      "Ashwin Makwana",
      <>
        <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
      </>,
      "N/A",
    ],
  ];

  const title = "LOR Draft Status"

  return <CardTable title={title} header={header} body={body} />;
}

export default DraftStatus;
