
const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.insertLORRequest = (user_id, lorRequest, personalDetails, acadDetails, compExamDetails, uniPref, facultyPref) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if (err) {
                connection.release();
                reject(new Error("Connectionn Error. Try again."));
            }
            connection.beginTransaction((err) => {
                if (err) {
                    connection.rollback(() => connection.release());
                    console.log(err);
                    reject(new Error("Connectionn Error. Try again."));
                }
            });
            try {
                // UPDATE PERSONAL DETAILS
                if (personalDetails && Object.keys(personalDetails).length > 0) {
                    const { updateString, updatedValue } = getPersonalDetailsUpdateString(personalDetails);
                    connection.execute(updateString, [...updatedValue, user_id], (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }
                // INSERT LOR REQUEST
                if (lorRequest && Object.keys(lorRequest).length > 0) {
                    const insertString = getLorRequestInsertString();
                    connection.execute(insertString, [
                        user_id ? parseInt(user_id) : null,
                        lorRequest.parent_mobile || null,
                        lorRequest.passout_date ? new Date(lorRequest.passout_date) : null,
                        lorRequest.placed_cdpc || null,
                        lorRequest.company || null,
                        lorRequest.bond_completed || null,
                        lorRequest.letter_head ? parseInt(lorRequest.letter_head) : null,
                        lorRequest.lor_status || null,
                    ], (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }
                // INSERT ACADEMIC DETAILS
                if (acadDetails && Object.keys(acadDetails).length > 0) {
                    acadDetails.forEach(acadDetail => {
                        if (acadDetail && Object.keys(acadDetail).length > 0) {
                            const insertString = getAcadDetailsInsertString();
                            connection.execute(insertString, [
                                user_id ? parseInt(user_id) : null,
                                acadDetail.cgpa ? parseFloat(acadDetail.cgpa) : null,
                                acadDetail.attendance ? parseFloat(acadDetail.attendance) : null,
                                acadDetail.sem ? parseInt(acadDetail.sem) : null,
                            ], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    });
                }
                // INSERT COMPETITIVE EXAM DETAILS
                if (compExamDetails && compExamDetails.length > 0) {
                    compExamDetails.forEach(compExamDetail => {
                        if (compExamDetail && Object.keys(compExamDetail).length > 0) {
                            const insertString = getCompExamDetailInsertString();
                            connection.execute(insertString, [user_id, parseInt(compExamDetail.mark), compExamDetail.exam_name, compExamDetail.upload_file], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    });
                }
                // INSERT UNIVERSITY PREFERENCE DETAILS
                if (uniPref && uniPref.length > 0) {
                    uniPref.forEach(uniObject => {
                        if (uniObject && Object.keys(uniObject).length > 0) {
                            const insertString = getUniPrefInsertString();
                            connection.execute(insertString, [user_id, uniObject.course_name, uniObject.country_name, uniObject.university_name, new Date(uniObject.intake_date)], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    });
                }
                // INSERT FACULTY PREFERENCE DETAILS
                if (facultyPref && facultyPref.length > 0) {
                    facultyPref.forEach(facultyObject => {
                        if (facultyObject && Object.keys(facultyObject).length > 0) {
                            const insertString = getFacultyPrefInsertString();
                            connection.execute(insertString, [user_id, facultyObject.faculty_name, facultyObject.faculty_email, facultyObject.stu_upload], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    });
                }
                connection.commit((err) => {
                    if (err) {
                        throw err;
                    } else {
                        connection.release();
                        resolve();
                    }
                });
                connection.release();
            } catch (err) {
                connection.rollback(() => connection.release());
                console.log(err);
                reject(new Error("Can't save the data"));
            }
        });
    });
};

const getPersonalDetailsUpdateString = (personalDetails) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in personalDetails) {
        if (key) {
            updateString += `${key}=?, `
            updatedValue.push(personalDetails[key]);
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.user SET ${updateString} WHERE id=?`, updatedValue };
};

const getLorRequestInsertString = () => {
    return `INSERT INTO lor.lor_request(user_id, parent_mobile, passout_date,
    placed_cdpc, company, bond_completed, letter_head, lor_status) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
};

const getAcadDetailsInsertString = () => {
    return `INSERT INTO lor.academic_details(user_id, cgpa, attendance, sem) 
    VALUES(?, ?, ?, ?)`;
};

const getCompExamDetailInsertString = () => {
    return `INSERT INTO lor.comp_exam_details(user_id, mark, exam_name, upload_file) 
    VALUES(?, ?, ?, ?)`;
}

const getUniPrefInsertString = () => {
    return `INSERT INTO lor.uni_pref(user_id, course_name, country_name, university_name, intake_date) 
    VALUES(?, ?, ?, ?, ?)`;
}

const getFacultyPrefInsertString = () => {
    return `INSERT INTO lor.faculty_pref(user_id, faculty_name, faculty_email, stu_upload) 
    VALUES(?, ?, ?, ?)`;
}
