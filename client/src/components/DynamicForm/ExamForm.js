import React from 'react';
import SecondaryButtonOutline from "../Button/SecondaryButton"
import InfoButton from "../Button/InfoButton"

export default class ExamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [{
        examName: "",
        marks:0,
        proof:""
      }]
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }
  
  handleClick() {
    var items = this.state.items;
    
    items.push({
      examName: "",
      marks:0,
      proof:""
    });
    
    this.setState({
      items: items,
      message: ""
    });
    // console.log(this.state.items)
  }

  handleExamNameChanged(i, event) {
    var items = this.state.items;
    items[i].examName  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }
  handleMarksChanged(i, event) {
    var items = this.state.items;
    items[i].marks  = event.target.value;
    this.setState({
      items: items
    });
    // console.log(this.state.items)
  }
  handleFileChanged(i, event) {
    var items = this.state.items;
    items[i].proof  = event.target.value;
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
            {/* <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
            /> */}
             <select name="projectName" className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" 
             onChange={context.handleExamNameChanged.bind(context, i)}
             placeholder="Hello">
             <option disabled selected>Select Exam</option>
              <option value="GRE">GRE</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="GMAT">GMAT</option>
              <option value="GATE">GATE</option>
              <option value="CAT">CAT</option>
            </select>
            </td>
            <td>
            <input
                type="number"
                className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                placeholder="Enter marks here"
                // value={o}
                onChange={context.handleMarksChanged.bind(context, i)}
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
        {/* </InfoButton> */}
        <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Exam Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Marks
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Upload Proof
              </th>
              {/* <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
            {/* {console.log(this.state.items)} */}
          </tbody>
        </table>
        <hr/>
      </div>
      </>
    );
  }
}