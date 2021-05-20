import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class UniversityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [
        {
          universityName: "",
          courseName: "",
          countryName: "",
          intakeDate: null,
        },
      ],
    };
    
    this.updateMessage = this.updateMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUniversityNameChanged = this.handleUniversityNameChanged.bind(this);
    this.handleCourseChanged = this.handleCourseChanged.bind(this);
    this.handleCountryChanged = this.handleCountryChanged.bind(this);
    this.handleItemDeleted = this.handleItemDeleted.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
    // console.log(event.target.value)
  }

  handleClick(event) {
    event.stopPropagation();
    let items = this.state.items;

    items.push({
      universityName: "",
      courseName: "",
      countryName: "",
      intakeDate: "",
    });

    this.setState({
      items: items,
      message: "",
    });
    // console.log(this.state.items)
  }

  handleUniversityNameChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].universityName = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleCourseChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].courseName = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleCountryChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].countryName = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleItemDeleted(event, i) {
    event.stopPropagation();
    let items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }

  renderRows() {
    return this.state.items.map((o, i) => {
      return (
        <tr key={"item-" + i}>
          <td>
            <input
              name="projectName"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              onChange={(event) => this.handleUniversityNameChanged(event, i)}
              placeholder="University Name here"
              value={o.universityName}
            ></input>
          </td>
          <td>
            <input
              type="text"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Course Name here"
              value={o.courseName}
              onChange={(event) => this.handleCourseChanged(event, i)}
            />
          </td>
          <td>
            <input
              type="text"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Country Name here"
              value={o.countryName}
              onChange={(event) => this.handleCountryChanged(event, i)}
            />
          </td>
          <td>
            <div className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150">
              <DatePicker
                placeholderText="Select date here"
                dateFormat="MMM/yyyy"
                showMonthYearPicker
                selected={o.intakeDate}
                onChange={(date, event) => {
                  event.stopPropagation();
                  let items = this.state.items;
                  items[i].intakeDate = date;
                  this.setState({
                    items: items,
                  });
                }}
              />
            </div>
          </td>
          <td>
            <div>
              <SecondaryButtonOutline
                onClick={(event) => this.handleItemDeleted(event, i)}
                text="Delete"
              ></SecondaryButtonOutline>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <InfoButton
          type="button"
          onClick={this.handleClick}
          text="Add Item"
        />
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                  University Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                  Course Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                  Country Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                  Intake(Month-Year)
                </th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
          <hr />
        </div>
      </>
    );
  }
}

// const UniversityForm= ()=> {

//   const [message, setMessage] = useState("")
//   const [items, setItems] = useState([{ }])

//   const updateMessage = (event)=> {
//     setMessage(event.target.value);
//     console.log(event.target.value)
//     // return message
//   }

//   const handleClick = () => {
//     var item = items;

//     item.push({ });
//     setMessage("");
//     setItems(item);
//     console.log("items",items)
//     renderRows()
//   }

//   const handleItemChanged=(i,event)=> {
//     var item = items;
//     item[i]  = event.target.value;
//     // console.log(event)
//     setItems(item)
//   }

//   const handleItemDeleted = (i)=> {
//     var item = items;

//     item.splice(i, 1);
//     setItems(item)
//   }

//   function renderRows() {
//     // console.log("this", this)

//     // console.log(items)
//     return  items.map(function(o, i) {
//         return (
//         <tr key={"item-" + i}>
//             <td>
//              <input name="UniversityName" className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
//              onChange={(event)=>{
//                updateMessage(event)
//                handleItemChanged(i,event)
//               }}
//              placeholder="Enter University Name">
//             </input>
//             </td>
//             <td>
//             <input
//                 type="text"
//                 className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
//                 placeholder="Enter Course Name"
//                 // value={o}
//                 onChange={(event)=>{
//                   updateMessage(event)
//                   handleItemChanged(i,event)
//                 }}
//             />
//             </td>
//             <td>
//             <input
//                 type="text"
//                 className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
//                 placeholder="Enter Country Name"
//                 // value={o}
//                 onChange={(event)=>{
//                   updateMessage(event)
//                   handleItemChanged(i,event)
//                 }}
//             />
//             </td>
//             <td>
//             {/* <input
//                 type="text"
//                 value={o}
//                 onChange={this.handleItemChanged.bind(this, i)}
//             /> */}
//             </td>
//             <td>
//             <div >
//             <SecondaryButtonOutline
//                 onClick={()=>handleItemDeleted(updateMessage(i))}
//                 text="Delete"
//             >
//             </SecondaryButtonOutline>
//             </div>
//             </td>
//         </tr>
//         );
//     });
//   };

//   // render() {
//     return (
//         <>
//         <InfoButton
//         type="button"
//           onClick={()=>{
//               handleClick();
//               renderRows()
//             }
//           }
//         text="Add Item"
//         />
//         {/* </InfoButton> */}
//         <div className="block w-full overflow-x-auto">
//         <table className="items-center w-full bg-transparent border-collapse">
//           <thead>
//             <tr>
//               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
//                 University Name
//               </th>
//               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
//                 Course Name
//               </th>
//               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
//                 Country Name
//               </th>
//               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
//                 Intake(Month-Year)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {renderRows()}
//           </tbody>
//         </table>
//         <hr/>
//         {/* <input
//           type="text"
//           value={this.state.message}
//           onChange={this.updateMessage.bind(this)}
//         /> */}
//       </div>
//       </>
//     );
//   // }
// }
// export default UniversityForm
