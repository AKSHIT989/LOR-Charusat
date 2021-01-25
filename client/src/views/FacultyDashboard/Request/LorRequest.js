import React from "react";
import CardTable from "../../../components/Cards/CardTable";

function LorRequest() {
  const header = [
    "No.",
    "Student Id",
    "Student Name",
    "Semester",
    "View Details",
  ];

  const body = [
    ["1", "17CE001", "Navdeep Dadhania", "6", "View"],
    ["2", "17CE002", "Nihal Shaikh", "6", "View"],
    ["3", "17CE003", "Akshit Soneji", "6", "View"],
  ];

  return (
    <div>
      <CardTable header={header} body={body} />;
    </div>
  );
}

export default LorRequest;
