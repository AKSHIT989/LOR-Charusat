import React from "react";
import CardTable from "../../../components/Cards/CardTable";
// import MaterialTable from 'material-table';

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

// function LorRequest() {
//   return (
//     <MaterialTable
//       title="Actions On Selected Rows Preview"
//       columns={[
//         { title: 'Name', field: 'name' },
//         { title: 'Surname', field: 'surname' },
//         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//         {
//           title: 'Birth Place',
//           field: 'birthCity',
//           lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ]}
//       data={[
//         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//       ]}        
//       options={{
//         selection: true
//       }}
//       actions={[
//         {
//           tooltip: 'Remove All Selected Users',
//           icon: 'delete',
//           onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
//         }
//       ]}
//     />
//   )
// }


export default LorRequest;

