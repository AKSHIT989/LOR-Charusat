import React, { useState } from "react";
import CardTable from "../../../components/Cards/CardTable";

const RemarkElement = ({ value, name }) => {
  const [state, setState] = useState({ value: value });

  const handleChange = (event) => {
    event.stopPropagation();
    setState({ ...state, value: event.target.value });
  };

  const handleChangeOnBlur = (event) => {
    event.stopPropagation();
    // PUT Request to update value of remark
    // console.log(`${parseInt(event.target.name.substr(6))}: ${state.value}`);
  };

  return (
    <>
      <input
        value={state.value}
        name={name}
        className="border-none outline-none h-10"
        onChange={handleChange}
        onBlur={handleChangeOnBlur}
      />
      <br />
      <input type="file" />
    </>
  );
};

const StatusElement = ({ status }) => {
  const color = status === "Pending" ? "orange" : "green";
  return (
    <>
      <i className={`fas fa-circle text-${color}-500 mr-2`}></i> {status}
    </>
  );
};

const LinkElement = ({name}) => (
  <a
    className="text-blue-500 underline"
    target="_blank"
    href="/redirect/https://www.google.com"
  >
    {name}
  </a>
);

class LorRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
    };

    this.getData = this.getData.bind(this);
    this.processData = this.processData.bind(this);
    this.handleCickOnButton = this.handleCickOnButton.bind(this);
    this.handleClickOnCheckBox = this.handleClickOnCheckBox.bind(this);
    this.checkAllCheckboxes = this.checkAllCheckboxes.bind(this);

    this.checkboxRefs = { header: React.createRef(), body: [] };
    this.header = [
      <input
        type="checkbox"
        ref={this.checkboxRefs.header}
        onClick={this.checkAllCheckboxes}
      />,
      "Request Id",
      "Student Id",
      "Student Name",
      "Status",
      "Remarks",
      "View/Download LOR",
    ];

    this.title = "LOR Request";
    this.count = 0;
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch("http://localhost:3000/tpr");
      const data = await response.json();
      this.processData(data.requests);
    } catch (e) {
      console.log(e);
    }
  }

  processData(data) {
    this.checkboxRefs.body = [];
    const body = data.map((request, index) => {
      let row = [];
      this.checkboxRefs.body.push(React.createRef());

      row.push(
        <input
          type="checkbox"
          ref={this.checkboxRefs.body[index]}
          onClick={(event) => {
            this.handleClickOnCheckBox(event, index);
          }}
        />
      );
      row.push(`Req ${request["req-id"]}`);
      row.push(request["stu-id"]);
      row.push(request["stu-name"]);
      row.push(<StatusElement status={request["status"]} />);
      row.push(
        <RemarkElement value={request["remarks"]} name={`remark${index}`} />
      );
      row.push(<LinkElement name={"View/Download"} />);
      return row;
    });
    this.setState({ body: body });
  }

  handleCickOnButton(event) {
    event.stopPropagation();
    // DELETE request to server
    // GET request to server { getData() }
  }

  handleClickOnCheckBox(event, index) {
    event.stopPropagation();
    this.checkboxRefs.header.current.checked = false;
    if (event.target.checked) {
      this.count++;
    } else {
      this.count--;
    }
    if (this.count === this.checkboxRefs.body.length) {
      this.checkboxRefs.header.current.checked = true;
    }
  }

  checkAllCheckboxes(event) {
    event.stopPropagation();
    this.checkboxRefs.body.forEach((checkbox, index) => {
      checkbox.current.checked = event.target.checked;
    });

    if (event.target.checked) {
      this.count = this.checkboxRefs.body.length;
    } else {
      this.count = 0;
    }
  }

  render() {
    return (
      <>
        <CardTable
          title={this.title}
          header={this.header}
          body={this.state.body}
        />
        <button
          className="bg-blue-500 w-max float-right text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          onClick={this.handleCickOnButton}
        >
          Approve
        </button>
      </>
    );
  }
}

export default LorRequest;