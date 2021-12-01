import React, { useCallback, useContext, useEffect, useState } from "react";
import SecondaryButtonOutline from "../../../components/Button/SecondaryButtonOutline";
import InfoButton from "../../../components/Button/InfoButton";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../assets/styles/external.css";
import RadioButton from "../../../components/Radio/RadioButton";
import AttendanceTable from "../../../components/Cards/AttendanceTable";
import ExamForm from "../../../components/DynamicForm/ExamForm";
import UniversityForm from "../../../components/DynamicForm/UniversityForm";
import FacultyForm from "../../../components/DynamicForm/FacultyForm";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { decrypt, encrypt } from "../../../secure";
import { UserContext } from "../../../contexts/user";
import {
  GET_STU_LOR_REQUEST,
  LOR_REQUEST,
  UPDATE_LOR_REQUEST,
} from "../../../queries";
import {
  acad_details,
  changesInAcadDetails,
  changesInCompExamDetails,
  changesInFacultyPref,
  changesInLorRequest,
  changesInPersonalDetails,
  changesInUniPref,
  comp_exam_details,
  faculty_pref,
  lor_request,
  personal_details,
  uni_pref,
  resetChanges
} from "./data";

function LorRequest({ history }) {
  const [lorRequest, setLorRequest] = useState(lor_request);
  const [personalDetails, setPersonalDetails] = useState(personal_details);
  const [acadDetails, setAcadDetails] = useState(acad_details);
  const [uniPref, setUniPref] = useState(uni_pref);
  const [facultyPref, setFacultyPref] = useState(faculty_pref);
  const [compExamDetails, setCompExamDetails] = useState(comp_exam_details);
  const [facultyList, setFacultyList] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [userInfo] = useContext(UserContext);

  const processData = (data) => {
    setPersonalDetails({ ...data.personal_details });
    setFacultyList([...data.faculty_list]);
    if (data.lor_request) {
      setLorRequest({ ...data.lor_request });
      setAcadDetails(data.acad_details ? [...data.acad_details] : []);
      setCompExamDetails(data.comp_exam_details ? [...data.comp_exam_details] : []);
      setUniPref(data.uni_pref ? [...data.uni_pref] : []);
      setFacultyPref(data.faculty_pref ? [...data.faculty_pref] : []);
      setDisableSubmit(true);
      setTermsAccepted(true);
    } else {
      setDisableSubmit(false);
    }
  };

  const getData = useCallback(async () => {
    try {
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
            GET_STU_LOR_REQUEST(userInfo.user_id, userInfo.user_type, userInfo.institute, userInfo.department)
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      if (data) {
        resetChanges();
        processData(data.getStuLORRequest);
      }
    } catch (e) {
      console.log(e);
    }
  }, [userInfo.access_token, userInfo.department, userInfo.institute, userInfo.user_id, userInfo.user_type]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChangeInLorForm = (event) => {
    event.stopPropagation();
    if (event.target.name === 'letter_head') {
      setLorRequest({ ...lorRequest, [event.target.name]: parseInt(event.target.value) });
      changesInLorRequest.update[event.target.name] = parseInt(event.target.value);
    } else {
      setLorRequest({ ...lorRequest, [event.target.name]: event.target.value });
      changesInLorRequest.update[event.target.name] = event.target.value;
    }
  };

  const handleChangeInPersonalDetails = (event) => {
    event.stopPropagation();
    setPersonalDetails({ ...personalDetails, [event.target.name]: event.target.value });
    changesInPersonalDetails.update[event.target.name] = event.target.value;
  };

  const handleChangeInAcadDetails = (event, index, id) => {
    event.stopPropagation();
    const acadDetailsCopy = [...acadDetails];
    acadDetailsCopy[index][event.target.name] = parseFloat(event.target.value);
    setAcadDetails(acadDetailsCopy);
    if (id !== undefined) {
      if (changesInAcadDetails.update[id] === undefined) {
        changesInAcadDetails.update[id] = {};
      }
      changesInAcadDetails.update[id][event.target.name] = parseFloat(
        event.target.value
      );
    }
  };

  const handleChangeInCompExamDetails = (event, index, id) => {
    event.stopPropagation();
    const compExamDetailsCopy = [...compExamDetails];
    if (event.target.name === "mark") {
      compExamDetailsCopy[index][event.target.name] = parseFloat(
        event.target.value
      );
    } else {
      compExamDetailsCopy[index][event.target.name] = event.target.value;
    }
    setCompExamDetails(compExamDetailsCopy);
    if (id !== undefined) {
      if (changesInCompExamDetails.update[id] === undefined) {
        changesInCompExamDetails.update[id] = {};
      }
      if (event.target.name === "mark") {
        changesInCompExamDetails.update[id][event.target.name] = parseFloat(
          event.target.value
        );
      } else {
        changesInCompExamDetails.update[id][event.target.name] = event.target.value;
      }
    }
  };

  const handleChangeInUniPref = (event, index, id, date) => {
    event.stopPropagation();
    const uniPrefCopy = [...uniPref];
    if (date !== undefined) {
      uniPrefCopy[index].intake_date = date;
    } else {
      uniPrefCopy[index][event.target.name] = event.target.value;
    }
    setUniPref(uniPrefCopy);
    if (id !== undefined) {
      if (changesInUniPref.update[id] === undefined) {
        changesInUniPref.update[id] = {};
      }
      if (date !== undefined) {
        changesInUniPref.update[id].intake_date = date;
      } else {
        changesInUniPref.update[id][event.target.name] = event.target.value;
      }
    }
  };

  const handleChangeInFacultyPref = (event, index, id) => {
    event.stopPropagation();
    const facultyPrefCopy = [...facultyPref];
    facultyPrefCopy[index].faculty_name =
      facultyList[event.target.selectedIndex].name;
    facultyPrefCopy[index].faculty_email =
      facultyList[event.target.selectedIndex].email;
    setFacultyPref(facultyPrefCopy);
    if (id !== undefined) {
      if (changesInFacultyPref.update[id] === undefined) {
        changesInFacultyPref.update[id] = {};
      }
      changesInFacultyPref.update[id].faculty_name =
        facultyList[event.target.selectedIndex].name;
      changesInFacultyPref.update[id].faculty_email =
        facultyList[event.target.selectedIndex].email;
    }
  };

  const handleChangeInFacultyFile = async (event, index, id, fileNamePart, oldFileName) => {
    event.stopPropagation();
    const facultyPrefCopy = [...facultyPref];
    const fileName = await uploadFile(event.target.files[0], fileNamePart, oldFileName);
    facultyPrefCopy[index].stu_upload = fileName;
    setFacultyPref(facultyPrefCopy);
    if (id !== undefined) {
      if (changesInFacultyPref.update[id] === undefined) {
        changesInFacultyPref.update[id] = {};
      }
      changesInFacultyPref.update[id].stu_upload = fileName;
    }
  }

  const handleChangeInCompExamFile = async (event, index, id, fileNamePart, oldFileName) => {
    event.stopPropagation();
    const compExamDetailsCopy = [...compExamDetails];
    const fileName = await uploadFile(event.target.files[0], fileNamePart, oldFileName);
    compExamDetailsCopy[index].upload_file = fileName;
    setCompExamDetails(compExamDetailsCopy);
    if (id !== undefined) {
      if (changesInCompExamDetails.update[id] === undefined) {
        changesInCompExamDetails.update[id] = {};
      }
      changesInCompExamDetails.update[id].upload_file = fileName;
    }
  }

  const handleAddInCompExamDetails = (event) => {
    event.stopPropagation();
    const compExamDetailsCopy = [...compExamDetails];
    compExamDetailsCopy.push({
      exam_name: "GRE",
      mark: "",
      upload_file: "",
    });
    setCompExamDetails(compExamDetailsCopy);
  };

  const handleAddInUniPref = (event) => {
    event.stopPropagation();
    const uniPrefCopy = [...uniPref];
    uniPrefCopy.push({
      university_name: "",
      course_name: "",
      country_name: "",
      intake_date: null,
    });
    setUniPref(uniPrefCopy);
  };

  const handleAddInFacultyPref = (event) => {
    event.stopPropagation();
    const facultyPrefCopy = [...facultyPref];
    facultyPrefCopy.push({
      faculty_name: facultyList[0].name,
      faculty_email: facultyList[0].email,
      stu_upload: "",
    });
    setFacultyPref(facultyPrefCopy);
  };

  const handleDeleteInCompExamDetails = (event, index, id) => {
    event.stopPropagation();
    const compExamDetailsCopy = [...compExamDetails];
    const compExamDetail = compExamDetailsCopy.splice(index, 1);
    deleteFile(compExamDetail[0].upload_file);
    setCompExamDetails(compExamDetailsCopy);
    if (id !== undefined) {
      changesInCompExamDetails.delete.push(id);
    }
  };

  const handleDeleteInUniPref = (event, index, id) => {
    event.stopPropagation();
    const uniPrefCopy = [...uniPref];
    uniPrefCopy.splice(index, 1);
    setUniPref(uniPrefCopy);
    if (id !== undefined) {
      changesInUniPref.delete.push(id);
    }
  };

  const handleDeleteInFacultyPref = (event, index, id) => {
    event.stopPropagation();
    const facultyPrefCopy = [...facultyPref];
    const facultyDetail = facultyPrefCopy.splice(index, 1);
    deleteFile(facultyDetail[0].stu_upload);
    setFacultyPref([...facultyPrefCopy]);
    if (id !== undefined) {
      changesInFacultyPref.delete.push(id);
    }
  };

  const handleClickOnSubmit = (event) => {
    event.stopPropagation();
    lorRequest.lor_status = "Pending";
    lorRequest.company = lorRequest.placed_cdpc ? lorRequest.company : "";
    if (
      checkLorRequestValidity(lorRequest, lorRequest.placed_cdpc) &&
      checkLorRequestValidity(personalDetails) &&
      checkOtherFormValidity(compExamDetails) &&
      checkOtherFormValidity(uniPref) &&
      facultyPref.length > 0 &&
      checkOtherFormValidity(facultyPref)
    ) {
      submitLorForm();
      getData();
    }
  };

  const itemsToAdd = () => {
    compExamDetails.forEach((exam) => {
      if (!exam.id) {
        changesInCompExamDetails.add.push(exam);
      }
    });

    uniPref.forEach((uni) => {
      if (!uni.id) {
        changesInUniPref.add.push(uni);
      }
    });

    facultyPref.forEach((faculty) => {
      if (!faculty.id) {
        changesInFacultyPref.add.push(faculty);
      }
    });
  };

  const handleClickOnSave = (event) => {
    event.stopPropagation();
    if (
      checkLorRequestValidity(lorRequest, lorRequest.placed_cdpc) &&
      checkLorRequestValidity(personalDetails) &&
      checkOtherFormValidity(compExamDetails) &&
      checkOtherFormValidity(uniPref) &&
      facultyPref.length > 0 &&
      checkOtherFormValidity(facultyPref)
      ) {
      itemsToAdd();
      saveLorForm();
      getData();
    }
  }

  const checkLorRequestValidity = (data, checkCompany) => {
    for (const key in data) {
      if (key === 'company') {
        if (checkCompany && !data[key].toString().trim()) {
          return false;
        }
      } else if (typeof data[key] !== "boolean" && !data[key]) {
        return false;
      } else if (!data[key].toString().trim()) {
        return false;
      }
    }
    return true;
  };

  const checkOtherFormValidity = (details) => {
    for (let i = 0; i < details.length; i++) {
      const data = details[i];
      for (const key in data) {
        if (!data[key]) {
          return false;
        } else if (!data[key].toString().trim()) {
          return false;
        }
      }
    }
    return true;
  };

  const submitLorForm = async () => {
    try {
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
            LOR_REQUEST(
              userInfo.user_id,
              userInfo.user_type,
              lorRequest,
              changesInPersonalDetails.update,
              acadDetails,
              compExamDetails,
              uniPref,
              facultyPref,
            )
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      // console.log(data);
      if (data) {
        setDisableSubmit(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveLorForm = async () => {
    try {
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
            UPDATE_LOR_REQUEST(
              userInfo.user_id,
              userInfo.user_type,
              changesInLorRequest,
              changesInPersonalDetails,
              changesInAcadDetails,
              changesInCompExamDetails,
              changesInUniPref,
              changesInFacultyPref,
            )
          ),
        }),
      });
      const result = await response.json();
      const { data } = JSON.parse(decrypt(result.text));
      // console.log(data);
      if (data) {
        setDisableSubmit(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async (file, fileNamePart, oldFileName) => {
    try {
      const formData = new FormData();
      formData.append("user_id", userInfo.user_id);
      formData.append("user_type", userInfo.user_type);
      formData.append("old_file_name", oldFileName);
      formData.append("file", file, `_${userInfo.email}_${fileNamePart}_${file.name.substr(file.name.indexOf('.'))}`);

      const response = await fetch(process.env.REACT_APP_UPLOAD_FILE, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userInfo.access_token}`,
        },
        body: formData,
      });
      const result = await response.json();
      return result.fileName;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFile = async (fileName) => {
    try {
      const formData = new FormData();
      formData.append("user_id", userInfo.user_id);
      formData.append("user_type", userInfo.user_type);
      formData.append("file_name", fileName);

      await fetch(process.env.REACT_APP_DELETE_FILE, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userInfo.access_token}`,
        },
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    // <div>
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        {/* <button onClick={console.log("Hello")}>ggvh</button> */}
        <div className="rounded-t bg-white mb-0 px-6 py-6 text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">LOR Request</h6>
          <SecondaryButtonOutline
            text="Cancel"
            onClick={() => history.push("/student")}
          />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e) => e.preventDefault()}>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Id No.
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter ID No. here "
                    name="charusat_id"
                    value={personalDetails.charusat_id || ""}
                    onChange={(event) => handleChangeInPersonalDetails(event)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
                    placeholder="Enter Email here"
                    name="email"
                    value={userInfo.email || ""}
                    onChange={(event) => handleChangeInLorForm(event)}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter First Name here"
                    name="first_name"
                    value={personalDetails.first_name || ""}
                    onChange={(event) => handleChangeInPersonalDetails(event)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Enter last name here"
                    name="last_name"
                    value={personalDetails.last_name || ""}
                    onChange={(event) => handleChangeInPersonalDetails(event)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pass-out Month/Year
                  </label>
                  <div className="customDatePickerWidth">
                    <DatePicker
                      className="px-3 py-3 placeholder-gray-400 w-full text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      dateFormat="MMMM yyyy"
                      placeholderText="Select Date here"
                      showMonthYearPicker
                      name="passout_date"
                      selected={lorRequest.passout_date}
                      onChange={(date) => {
                        setLorRequest({
                          ...lorRequest,
                          passout_date: date.getTime(),
                        });
                        changesInLorRequest.update.passout_date = date.getTime();
                      }
                      }
                      peekNextMonth
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    User Mobile Number
                  </label>

                  <PhoneInput
                    inputClass="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    country="in"
                    inputStyle={{ width: "100%" }}
                    placeholder="Enter phone number"
                    inputProps={{ name: "mobile" }}
                    value={personalDetails.mobile}
                    onChange={(value) =>
                      setPersonalDetails({ ...personalDetails, mobile: `+${value}` })
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Parent's Mobile Number
                  </label>
                  {/* <div className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 w-full "> */}
                  <PhoneInput
                    country="in"
                    enableSearch={true}
                    inputStyle={{ width: "100%" }}
                    placeholder="Enter phone number"
                    inputProps={{ name: "parent_mobile" }}
                    value={lorRequest.parent_mobile}
                    onChange={(value) => {
                      setLorRequest({
                        ...lorRequest,
                        parent_mobile: `+${value}`,
                      });
                      changesInLorRequest.update.parent_mobile = `+${value}`;
                    }
                    }
                  />
                  {/* </div> */}
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Placement Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Placed through CDPC, Charusat
                  </label>
                  <RadioButton
                    name="placed_cdpc"
                    text="No"
                    checked={lorRequest.placed_cdpc === false}
                    onChange={(event) => {
                      setLorRequest({ ...lorRequest, placed_cdpc: false });
                      changesInLorRequest.update.placed_cdpc = false;
                    }
                    }
                  />
                  <RadioButton
                    name="placed_cdpc"
                    text="Yes"
                    checked={lorRequest.placed_cdpc === true}
                    onChange={(event) => {
                      setLorRequest({ ...lorRequest, placed_cdpc: true });
                      changesInLorRequest.update.placed_cdpc = true;
                    }
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Bond period Completed?
                  </label>
                  <RadioButton
                    name="bond_completed"
                    text="No"
                    checked={lorRequest.bond_completed === false}
                    onChange={(event) => {
                      setLorRequest({ ...lorRequest, bond_completed: false });
                      changesInLorRequest.update.bond_completed = false;
                    }
                    }
                  />
                  <RadioButton
                    name="bond_completed"
                    text="Yes"
                    checked={lorRequest.bond_completed === true}
                    onChange={(event) => {
                      setLorRequest({ ...lorRequest, bond_completed: true });
                      changesInLorRequest.update.bond_completed = true;
                    }
                    }
                  />
                </div>
              </div>
              {
                lorRequest.placed_cdpc ?
                  (
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Enter last name here"
                          name="company"
                          value={lorRequest.company || ""}
                          onChange={(event) => handleChangeInLorForm(event)}
                        />
                      </div>
                    </div>
                  ) : <></>
              }
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Academic Details
            </h6>
            <AttendanceTable
              data={acadDetails}
              onChange={handleChangeInAcadDetails}
            />
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Competitive Exam Details
            </h6>
            <ExamForm
              data={compExamDetails}
              onChange={handleChangeInCompExamDetails}
              onAdd={handleAddInCompExamDetails}
              onDelete={handleDeleteInCompExamDetails}
              onFileChange={handleChangeInCompExamFile}
            />
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Letter Head for LOR
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    No. of letter head
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Number of letter heads"
                    name="letter_head"
                    value={lorRequest.letter_head || ""}
                    onChange={(event) => handleChangeInLorForm(event)}
                  ></input>
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              University Preference List
            </h6>
            <UniversityForm
              data={uniPref}
              onChange={handleChangeInUniPref}
              onAdd={handleAddInUniPref}
              onDelete={handleDeleteInUniPref}
            />
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Faculty Preference List
            </h6>
            <FacultyForm
              data={facultyPref}
              facultyList={facultyList}
              onChange={handleChangeInFacultyPref}
              onAdd={handleAddInFacultyPref}
              onDelete={handleDeleteInFacultyPref}
              onFileChange={handleChangeInFacultyFile}
            />
            <hr className="mt-6 border-b-1 border-gray-400" />
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Terms and mailing
            </h6>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(!termsAccepted)}
              disabled={disableSubmit}
            />
            <label className="ml-2">
              I hereby declare that the details furnished above are true
            </label>
            <hr className="mt-6 border-b-1 border-gray-400" />
            <div className="rounded-t mb-0 py-6 text-center flex justify-between w-full lg:w-12/12 overflow-x-auto">
              <PrimaryButton
                text="Submit"
                onClick={handleClickOnSubmit}
                disabled={disableSubmit || !termsAccepted}
              />
              <InfoButton text="Save" onClick={handleClickOnSave} />
              <SecondaryButtonOutline text="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LorRequest;
