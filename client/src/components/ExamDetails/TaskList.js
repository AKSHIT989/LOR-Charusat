import React,{useState} from "react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
        // const [startDate, setStartDate] = useState(new Date());
      let examName = `examName-${idx}`, score = `score-${idx}`, date = `date-${idx}`, proof = `proof-${idx}`
      return (
        <tr key={val.index} >
          <td>
            {/* <input type="text"  name="projectName" data-id={idx} id={examName} className="form-control " /> */}
            <select name="projectName" data-id={idx} id={examName} data-id={idx} className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" >
              <option value="pending">GRE</option>
              <option value="In Progress">IELTS</option>
              <option value="Completed">TOEFL</option>
              <option value="Hold">GMAT</option>
              <option value="Hold">GATE</option>
              <option value="Hold">CAT</option>
            </select>
          </td>
          <td>
            <input type="text"  name="task" id={score} data-id={idx} className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" />
          </td>
          <td>
            {/* <textarea  name="date" id={date} data-id={idx} className="form-control"></textarea> */}
            <DatePicker className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"/>
          </td>
          <td>
            <input type="file" accept="application/pdf" className="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"></input>
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr>
      )
    })
  )
}
export default TaskList