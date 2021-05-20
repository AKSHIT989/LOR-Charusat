import React from "react"
import TaskList from "./TaskList"
class Form extends React.Component {
    state = {
        taskList: [{ index: Math.random(), examName: "", score: "", date: "", proof: "" }],
        date: "",
        description: "",
    }
  
    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));
    }


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6" 
          // (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
      <div className="block w-full overflow-x-auto">
                <table className="table items-center w-full bg-transparent border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">Exam Name</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200" >Score</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">Date</th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">Proof</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                    </tbody>
                    {/* <tfoot>
                        <tr><td colSpan="4">
                            <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                        </td></tr>
                    </tfoot> */}
                </table>
                </div>
                </div>
        )
    }
}
export default Form