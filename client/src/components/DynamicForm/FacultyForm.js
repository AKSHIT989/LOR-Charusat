import React,{useState} from 'react';
import SecondaryButtonOutline from "../Button/SecondaryButton"
import InfoButton from "../Button/InfoButton"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class FacultyForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [{
        facultyName: "",
        facultyEmailId: "",
        lor: ""
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

  handleFacultyNameChanged(i, event) {
    var items = this.state.items;
    items[i].facultyName  = event.target.value;
    this.setState({
      items: items
    });
    console.log(this.state.items)
  }
  handleFacultyEmailChanged(i, event) {
    var items = this.state.items;
    items[i].facultyEmailId  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }
  handleFileChanged(i, event) {
    var items = this.state.items;
    items[i].lor  = event.target.value;
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
             onChange={context.handleFacultyNameChanged.bind(context, i)}
             placeholder="University Name here">
            </input>
            </td>
            <td>
            <input
                type="text"
                className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                placeholder="Course Name here"
                // value={o}
                onChange={context.handleFacultyEmailChanged.bind(context, i)}
            />
            </td>
            <td>
            <input type="file" accept="application/pdf" className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus]:shadow-outline w-full ease-linear transition-all duration-150" onChange={context.handleFileChanged.bind(context, i)}
            ></input>
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
                 Faculty Name
               </th>
               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                 Faculty email-id
               </th>
               <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                 Upload LOR
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