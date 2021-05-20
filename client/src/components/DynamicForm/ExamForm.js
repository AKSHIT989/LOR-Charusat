import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";

export default class ExamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [
        {
          examName: "",
          marks: 0,
          proof: "",
        },
      ],
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleExamNameChanged = this.handleExamNameChanged.bind(this);
    this.handleMarksChanged = this.handleMarksChanged.bind(this);
    this.handleFileChanged = this.handleFileChanged.bind(this);
    this.handleItemDeleted = this.handleItemDeleted.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  updateMessage(event) {
    event.stopPropagation();
    this.setState({
      message: event.target.value,
    });
  }

  handleClick(event) {
    event.stopPropagation();
    let items = this.state.items;

    items.push({
      examName: "",
      marks: 0,
      proof: "",
    });

    this.setState({
      items: items,
      message: "",
    });
    // console.log(this.state.items)
  }

  handleExamNameChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].examName = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleMarksChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].marks = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleFileChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].proof = event.target.value;
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
    // console.log("this", this.state)

    // console.log(this.state.items)
    return this.state.items.map((o, i) => {
      return (
        <tr key={"item-" + i}>
          <td>
            {/* <input
                type="text"
                value={o}
                onChange={this.handleItemChanged.bind(this, i)}
            /> */}
            <select
              name="projectName"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              onChange={(event) => this.handleExamNameChanged(event, i)}
              placeholder="Hello"
              // value="Selected Exam"
            >
              <option disabled selected>
                Select Exam
              </option>
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
              value={o.marks}
              onChange={(event) => this.handleMarksChanged(event, i)}
            />
          </td>
          <td>
            <input
              type="file"
              accept="application/pdf"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus]:shadow-outline w-full ease-linear transition-all duration-150"
              onChange={(event) => this.handleFileChanged(event, i)}
            ></input>
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
        <InfoButton type="button" onClick={this.handleClick} text="Add Item" />
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
          <hr />
        </div>
      </>
    );
  }
}
