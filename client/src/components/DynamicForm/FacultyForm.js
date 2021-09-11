import React from "react";
import SecondaryButtonOutline from "../Button/SecondaryButton";
import InfoButton from "../Button/InfoButton";
// import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default class FacultyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [
        {
          facultyName: "",
          facultyEmailId: "",
          lor: "",
        },
      ],
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFacultyNameChanged = this.handleFacultyNameChanged.bind(this);
    this.handleFacultyEmailChanged = this.handleFacultyEmailChanged.bind(this);
    this.handleFileChanged = this.handleFileChanged.bind(this);
    this.handleItemDeleted = this.handleItemDeleted.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  updateMessage(event) {
    event.stopPropagation();
    this.setState({
      message: event.target.value,
    });
    // console.log(event.target.value)
  }

  handleClick(event) {
    event.stopPropagation();
    let items = [...this.state.items];
    const item = {
      facultyName: "",
      facultyEmailId: "",
      lor: "",
    };

    items.push(item);

    this.setState({ items: items });
    // console.log(this.state.items)
  }

  handleFacultyNameChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].facultyName = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleFacultyEmailChanged(event, i) {
    event.stopPropagation();
    let items = this.state.items;
    items[i].facultyEmailId = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleFileChanged(event, i) {
    event.stopPropagation();
    var items = this.state.items;
    items[i].lor = event.target.value;
    this.setState({
      items: items,
    });
    // console.log(this.state.items)
  }

  handleItemDeleted(event, i) {
    event.stopPropagation();
    let items = [...this.state.items];
    items.splice(i, 1);
    this.setState({ items: items });
  }

  renderRows() {
    return this.state.items.map((o, i) => {
      return (
        <tr key={"item-" + i}>
          <td>
            <input
              name="facultyName"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              onChange={(event) => this.handleFacultyNameChanged(event, i)}
              placeholder="Faculty Name here"
              value={o.facultyName}
            ></input>
          </td>
          <td>
            <input
              name="facultyEmailId"
              className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
              placeholder="Faculty Email Id here"
              value={o.facultyEmailId}
              onChange={(event) => this.handleFacultyEmailChanged(event, i)}
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
            <tbody>{this.renderRows()}</tbody>
          </table>
          <hr />
        </div>
      </>
    );
  }
}
