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
    [{no: "1", id:"17CE001", name:"Navdeep Dadhania", sem:"6", other:"View"}],
    [{no:"2", id:"17CE002", name:"Nihal Shaikh", sem:"6", other:"View"}],
    [{no:"3", id:"17CE003", name:"Akshit Soneji", sem:"6", other:"View"}],
  ];

  const title ="LOR Request List"

  return (
    <div>
      <CardTable title={title} header={header} body={body} />
    </div>
  );
}

export default LorRequest;
