import React,{useState} from 'react';
import SecondaryButtonOutline from "../Button/SecondaryButton"
import InfoButton from "../Button/InfoButton"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class UniversityForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [{
        universityName: "",
        courseName: "",
        countryName:"",
        intakeDate: null
      }]
    } 
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
    // console.log(event.target.value)
  }
  
  handleClick() {
    var items = this.state.items;
    
    items.push({
      universityName: "",
      courseName: "",
      countryName:"",
      intakeDate: ""
    });
    
    this.setState({
      items: items,
      message: ""
    });
    // console.log(this.state.items)
  }

  handleUniversityNameChanged(i, event) {
    var items = this.state.items;
    items[i].universityName  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }
  handleCourseChanged(i, event) {
    var items = this.state.items;
    items[i].courseName  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }
  handleCountryChanged(i, event) {
    var items = this.state.items;
    items[i].countryName  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }


  renderRows() {
    var context = this;
    // console.log("this", this.state)

    // console.log(this.state.items)
    return  this.state.items.map(function(o, i) {
        return (
        <tr key={"item-" + i}>
            <td>
             <input name="projectName" className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" 
             onChange={context.handleUniversityNameChanged.bind(context, i)}
             placeholder="University Name here">
            </input>
            </td>
            <td>
            <input
                type="text"
                className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                placeholder="Course Name here"
                // value={o}
                onChange={context.handleCourseChanged.bind(context, i)}
            />
            </td>
            <td>
            <input
                type="text"
                className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                placeholder="Country Name here"
                // value={o}
                onChange={context.handleCountryChanged.bind(context, i)}
            />
            </td>
            <td>
            <div className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150">
            <DatePicker 
            placeholderText="Select date here"
              dateFormat="MMM/yyyy"
              showMonthYearPicker
              selected={context.state.items[i].intakeDate}
              onChange={ date=>{
                var items = context.state.items;
                items[i].intakeDate = date.get;
                context.setState({
                  items: items
                });
              } }
              />
            </div>
            </td>
            <td>
            <div >
            <SecondaryButtonOutline
                onClick={context.handleItemDeleted.bind(context, i)}
                text="Delete"
            >
            </SecondaryButtonOutline>
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
        onClick={this.handleClick.bind(this)}
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
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
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
//                 onChange={context.handleItemChanged.bind(context, i)}
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