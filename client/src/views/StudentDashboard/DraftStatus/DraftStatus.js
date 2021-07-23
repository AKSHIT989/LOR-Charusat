import React from "react";
import CardTable from "../../../components/Cards/CardTable";

const StatusElement = ({ status }) => {
  const color = status === "Pending" ? "orange" : "green";
  return (
    <>
      <i className={`fas fa-circle text-${color}-500 mr-2`}></i> {status}
    </>
  );
};

class DraftStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
    };

    this.getData = this.getData.bind(this);
    this.processData = this.processData.bind(this);

    this.header = ["Draft Id", "Faculty Name", "Status", "Remarks"];
    this.title = "LOR Draft Status";
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch("http://localhost:1337/student-draft-statuses");
      const data = await response.json();
      this.processData(data);
    } catch (e) {
      console.log(e);
    }
  }

  processData(data) {
    const body = data.map((draftStatus, index) => {
      let row = [];

      row.push(`Draft ${draftStatus["draft_id"]}`);
      row.push(draftStatus["faculty_name"]);
      row.push(<StatusElement status={draftStatus["status"]} />);
      row.push(draftStatus["remarks"]);
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

export default DraftStatus;

/*
<>
  <i className="fas fa-circle text-orange-500 mr-2"></i> Pending
</>
*/
