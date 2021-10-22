import React, { useState } from "react";
import { UPDATE_FACULTY_REMARK } from "../../queries";
import { encrypt } from "../../secure";
import FileInput from "../FileInput/FileInput";

const Remark = ({ value, name, id, userInfo, stuEmail, file }) => {
  const [state, setState] = useState(value);
  const [fileName, setFileName] = useState(file);

  const handleChange = (event) => {
    event.stopPropagation();
    setState(event.target.value);
  };

  const updateRemark = async () => {
    try {
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
            UPDATE_FACULTY_REMARK(
              id,
              userInfo.user_id,
              userInfo.user_type,
              state
            )
          ),
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeOnBlur = (event) => {
    event.stopPropagation();
    updateRemark();
  };

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("user_id", userInfo.user_id);
      formData.append("user_type", userInfo.user_type);
      formData.append("old_file_name", fileName);
      formData.append("faculty_upload", true);
      formData.append("file", file, `_${userInfo.email}_${stuEmail}_${file.name.substr(file.name.indexOf('.'))}`);

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

  const handleChangeInFile = async (event) => {
    const fileName = await uploadFile(event.target.files[0]);
    setFileName(fileName);
  }

  return (
    <>
      <input
        value={state}
        name={name}
        className="border-none outline-none h-10"
        onChange={handleChange}
        onBlur={handleChangeOnBlur}
      />
      <br />
      <FileInput
        name="faculty_upload"
        onChange={handleChangeInFile}
        fileName={fileName}
      />
    </>
  );
};

export default Remark;
