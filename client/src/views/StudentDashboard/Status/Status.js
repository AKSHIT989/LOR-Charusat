import React from "react";
import CardTable from "../../../components/Cards/CardTable";

const LinkElement = ({name}) => (
  <a
    className="text-blue-500 underline"
    target="_blank"
    href="/redirect/https://www.google.com"
  >
    {name}
  </a>
);

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
    };

    this.getData = this.getData.bind(this);
    this.processData = this.processData.bind(this);

    this.header = [
      "Request Id",
      "Request Name",
      "Date",
      "Status",
      "Download LOR Request Form",
    ];

    this.title = "Approve Status";
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      this.processData(data.status);
    } catch (e) {
      console.log(e);
    }
  }

  processData(data) {
    const body = data.map((status, index) => {
      let row = [];

      row.push(`Req ${status["req-id"]}`);
      row.push(status["req-name"]);
      row.push(status["date"]);
      row.push(status["status"]);
      row.push(<LinkElement name={"Download"} />);
      return row;
    });
    this.setState({ body: body });
  }

  render() {
    return (
      <>
        <CardTable
          title={this.title}
          header={this.header}
          body={this.state.body}
        />
      </>
    );
  }
}

export default Status;

/*
<>
  <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
</>
*/
