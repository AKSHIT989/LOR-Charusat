import React from "react";
import CardTable from "../../../components/Cards/CardTable";
import { UserContext } from "../../../contexts/user";
import { STU_LOR_DRAFT_STATUS } from "../../../queries";
import { decrypt, encrypt } from "../../../secure";

const StatusElement = ({ status }) => {
  const color = status && status.toLowerCase() === "completed" ? "green" : "orange";
  return (
    <>
      <i className={`fas fa-circle text-${color}-500 mr-2`}></i> {status}
    </>
  );
};

class DraftStatus extends React.Component {
  static contextType = UserContext;
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
      const [userInfo] = this.context;
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${userInfo.access_token}`
        },
        body: JSON.stringify({
          text: encrypt(STU_LOR_DRAFT_STATUS(userInfo.user_id, userInfo.user_type)),
        }),
      });
      const result = await response.json();
      const {data} = JSON.parse(decrypt(result.text));
      this.processData(data.getStuLORDraftStatus);
    } catch (e) {
      console.log(e);
    }
  }

  processData(data) {
    const body = data.map((draftStatus, index) => {
      let row = [];

      row.push(`Draft ${index + 1}`);
      row.push(draftStatus["faculty_name"]);
      row.push(<StatusElement status={draftStatus["status"]} />);
      row.push(draftStatus["remark"]);
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
