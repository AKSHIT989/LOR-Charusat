import React from "react";
import CardTable from "../../../components/Cards/CardTable";
import Remark from "../../../components/Remark/Remark";
import { UserContext } from "../../../contexts/user";
import { GET_HOD_REQUEST, UPDATE_FACULTY_LOR_STATUS } from "../../../queries";
import { decrypt, encrypt } from "../../../secure";

const LinkElement = ({ name, link }) => (
  <a
    className="text-blue-500 underline"
    target="_blank"
    rel="noreferrer"
    href={`/redirect/${link}`}
  >
    {name}
  </a>
);

class LorRequest extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      isLoading: false,
    };

    this.getData = this.getData.bind(this);
    this.processData = this.processData.bind(this);
    this.handleCickOnButton = this.handleCickOnButton.bind(this);
    this.handleClickOnCheckBox = this.handleClickOnCheckBox.bind(this);
    this.checkAllCheckboxes = this.checkAllCheckboxes.bind(this);
    this.updateLORStatus = this.updateLORStatus.bind(this);

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
    this.approveIndices = [];
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    this.approveIndices = [];
    try {
      const [userInfo] = this.context;
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userInfo.access_token}`,
        },
        body: JSON.stringify({
          text: encrypt(
            GET_HOD_REQUEST(
              userInfo.email,
              userInfo.user_id,
              userInfo.user_type
            )
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      // console.log(data);
      this.processData(data.getHODRequests);
    } catch (e) {
      console.log(e);
    }
  }

  processData(data) {
    this.checkboxRefs.body = [];
    let body;
    if (data) {
      body = data.map((request, index) => {
        let row = [];
        this.checkboxRefs.body.push({ref: React.createRef(), id: request.id});
  
        row.push(
          <input
            type="checkbox"
            ref={this.checkboxRefs.body[index].ref}
            onClick={(event) => {
              this.handleClickOnCheckBox(event, index, request.id);
            }}
            defaultChecked={false}
          />
        );
        row.push(`Req ${index + 1}`);
        row.push(request["charusat_id"]);
        row.push(request["stu_name"]);
        row.push(request["status"]);
        row.push(
          <Remark
            value={request["remark"] || ""}
            name={`remark${index}`}
            id={request.id}
            userInfo={this.context[0]}
            stuEmail={request["stu_email"]}
            file={request["faculty_upload"] || ""}
          />
        );
        row.push(<LinkElement name={"View/Download"} link={process.env.REACT_APP_VIEW_FILE + request["stu_upload"]} />);
        return row;
      });
    } else {
      body = [];
    }
    this.setState({ body: [...body] });
  }

  async updateLORStatus(approved) {
    try {
      const indices = this.approveIndices.map(obj => obj.id);
      const userInfo = this.context[0];
      await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${userInfo.access_token}`,
        },
        body: JSON.stringify({
          text: encrypt(
            UPDATE_FACULTY_LOR_STATUS(
              indices,
              userInfo.user_id,
              userInfo.user_type,
              approved
            )
          ),
        }),
      });
    } catch (e) {
      console.log(e);
    }
    this.approveIndices = [];
  }

  async handleCickOnButton(event, approved) {
    event.stopPropagation();
    this.setState({isLoading: true});
    await this.updateLORStatus(approved);
    await this.getData();
    this.checkboxRefs.body.forEach(obj => obj.ref.current.checked = false);
    this.checkboxRefs.header.current.checked = false;
    this.count = 0;
    this.setState({isLoading: false});
    // GET request to server { getData() }
  }

  handleClickOnCheckBox(event, index, id) {
    event.stopPropagation();
    this.checkboxRefs.header.current.checked = false;
    if (event.target.checked) {
      this.count++;
      this.approveIndices.push({id, index});
    } else {
      this.count--;
      const idx = this.approveIndices.findIndex(obj => id === obj.id);
      if (idx > -1) {
        this.approveIndices.splice(idx, 1);
      }
    }
    if (this.count === this.checkboxRefs.body.length) {
      this.checkboxRefs.header.current.checked = true;
    }
  }

  checkAllCheckboxes(event) {
    event.stopPropagation();
    const approveIndices = [];
    this.checkboxRefs.body.forEach((checkbox, index) => {
      checkbox.ref.current.checked = event.target.checked;
      approveIndices.push({id: checkbox.id, index});
    });

    if (event.target.checked) {
      this.count = this.checkboxRefs.body.length;
      this.approveIndices = approveIndices;
    } else {
      this.count = 0;
      this.approveIndices = [];
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
          className={"bg-blue-500 w-max float-right text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 disabled:opacity-50 disabled:cursor-wait"}
          type="button"
          onClick={(event) => this.handleCickOnButton(event, true)}
          disabled={this.state.isLoading}
        >
          Approve
        </button>
        <button
          className={"bg-blue-500 w-max float-right text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 disabled:opacity-50 disabled:cursor-wait"}
          type="button"
          onClick={(event) => this.handleCickOnButton(event, false)}
          disabled={this.state.isLoading}
        >
          Reject
        </button>
      </>
    );
  }
}

export default LorRequest;
