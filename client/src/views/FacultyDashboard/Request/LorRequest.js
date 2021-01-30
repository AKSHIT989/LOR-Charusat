import React from "react";
import CardTable from "../../../components/Cards/CardTable";

// import MaterialTable from 'material-table';

function LorRequest() {
  const header = [
    "#",
    "No.",
    "Student Id",
    "Student Name",
    "Semester",
    "Remarks",
    "View Details",
  ];

  const body = [
    [
      <input type="checkbox" />,
      "Req 1",
      "17CE001",
      "Navdeep Dadhania",
      3,
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
        View
      </a>,
    ],
    [
      <input type="checkbox" />,
      "Req 2",
      "17CE002",
      "Nihal Shaikh",
      3,
      <>
        <input
          defaultValue={"Change on line 23..."}
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
        View
      </a>,
    ],
    [
      <input type="checkbox" />,
      "Req 3",
      "17CE003",
      "Akshit Soneji",
      3,
      <>
        <input
          defaultValue={"N/A"}
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
        View
      </a>,
    ],
  ];

  const title = "LOR Request List";

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
