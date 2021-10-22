const { unlinkSync, createReadStream, statSync, existsSync } = require("fs");
const { join } = require("path");
const { authenticateToken } = require("./middleware/authenticate");
const { hash } = require("./utilities/secure");
const { getDBInstance } = require("./resolvers/operations");
const db = getDBInstance();

exports.uploadFile = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const id = parseInt(req.body.id);
  const userId = parseInt(req.body.user_id);
  const userType = req.body.user_type;
  const oldFileName = req.body.old_file_name;
  const facultyUpload = req.body.faculty_upload;
  const file = req.files.file;

  if (!authenticateToken(req.headers, userId, userType)) {
    return res.status(401).json({ msg: "Cannot authenticate the user" });
  }
  const extension = file.name.substr(file.name.indexOf('.', file.name.length - 5), file.name.length);
  const fileName = hash(file.name) + extension;

  if (oldFileName && existsSync(join(__dirname, "public", "uploads", oldFileName))) {
    unlinkSync(join(__dirname, "public", "uploads", oldFileName));
  }

  if (facultyUpload) {
    updateFacultyUpload(fileName, id, res);
  }

  file.mv(join(__dirname, "public", "uploads", fileName), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: fileName });
  });
};

exports.sendFile = (req, res) => {
  try {
    const filePath = join(__dirname, "public", "uploads", req.params.fileName);
    const file = createReadStream(filePath);
    const stat = statSync(filePath);
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=${req.params.fileName}`
    );
    file.pipe(res);
  } catch (err) {
    console.log(err);
    res.status(400).err("No such file was found");
  }
};

exports.deleteFile = (req, res) => {
  const userId = parseInt(req.body.user_id);
  const userType = req.body.user_type;
  const fileName = req.body.file_name;
  if (!authenticateToken(req.headers, userId, userType)) {
    return res.status(401).json({ msg: "Cannot authenticate the user" });
  }

  if (fileName && existsSync(join(__dirname, "public", "uploads", fileName))) {
    unlinkSync(join(__dirname, "public", "uploads", fileName));
    res.status(200).json({ msg: "File Deleted" });
  } else {
    res.status(304).json({ msg: "File Not found" });
  }
}

const updateFacultyUpload = (fileName, id, res) => {
  db.execute("UPDATE lor.faculty_pref SET faculty_upload=? WHERE id=?", [fileName, id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
}