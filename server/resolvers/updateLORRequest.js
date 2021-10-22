
const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.updateLORRequest = (user_id, lorRequest, personalDetails, acadDetails, compExamDetails, uniPref, facultyPref) => {
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
                if (personalDetails && personalDetails.update && Object.keys(personalDetails.update).length > 0) {
                    const { updateString, updatedValue } = getPersonalDetailsUpdateString(personalDetails.update);
                    connection.execute(updateString, [...updatedValue, user_id], (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }
                // UPDATE LOR REQUEST
                if (lorRequest && lorRequest.update && Object.keys(lorRequest.update).length > 0) {
                    const { updateString, updatedValue } = getLorRequestUpdateString(lorRequest.update);
                    connection.execute(updateString, [...updatedValue, user_id], (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                }
                // UPDATE ACADEMIC DETAILS
                if (acadDetails && acadDetails.update && Object.keys(acadDetails.update).length > 0) {
                    for (const id in acadDetails.update) {
                        if (id) {
                            const acadDetail = acadDetails.update[id];
                            const { updateString, updatedValue } = getAcadDetailsUpdateString(acadDetail);
                            connection.execute(updateString, [...updatedValue, id], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    }
                }
                // UPDATE COMPETITIVE EXAM DETAILS
                if (compExamDetails && compExamDetails.update && Object.keys(compExamDetails.update).length > 0) {
                    for (const id in compExamDetails.update) {
                        if (id) {
                            const compExamDetail = compExamDetails.update[id];
                            const { updateString, updatedValue } = getCompExamDetailsUpdateString(compExamDetail);
                            connection.execute(updateString, [...updatedValue, id], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    }
                }
                // UPDATE UNIVERSITY PREFERENCE DETAILS
                if (uniPref && uniPref.update && Object.keys(uniPref.update).length > 0) {
                    for (const id in uniPref.update) {
                        if (id) {
                            const uniObject = uniPref.update[id];
                            const { updateString, updatedValue } = getUniPrefUpdateString(uniObject);
                            connection.execute(updateString, [...updatedValue, id], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    }
                }
                // UPDATE FACULTY PREFERENCE DETAILS
                if (facultyPref && facultyPref.update && Object.keys(facultyPref.update).length > 0) {
                    for (const id in facultyPref.update) {
                        if (id) {
                            const facultyObject = facultyPref.update[id];
                            const { updateString, updatedValue } = getFacultyPrefUpdateString(facultyObject);
                            connection.execute(updateString, [...updatedValue, id], (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    }
                }
                // INSERT COMPETITIVE EXAM DETAILS
                if (compExamDetails && compExamDetails.add && compExamDetails.add.length > 0) {
                    compExamDetails.add.forEach(compExamDetail => {
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
                if (uniPref && uniPref.add && uniPref.add.length > 0) {
                    uniPref.add.forEach(uniObject => {
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
                if (facultyPref && facultyPref.add && facultyPref.add.length > 0) {
                    facultyPref.add.forEach(facultyObject => {
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
                // DELETE COMPETITIVE EXAM DETAILS
                if (compExamDetails && compExamDetails.delete && compExamDetails.delete.length > 0) {
                    compExamDetails.delete.forEach(deleteId => {
                        const deleteString = getCompExamDetailDeleteString();
                        connection.execute(deleteString, [deleteId], (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    });
                }
                // DELETE UNIVERSITY PREFERENCE DETAILS
                if (uniPref && uniPref.delete && uniPref.delete.length > 0) {
                    uniPref.delete.forEach(deleteId => {
                        const deleteString = getUniPrefDeleteString();
                        connection.execute(deleteString, [deleteId], (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    });
                }
                // DELETE FACULTY PREFERENCE DETAILS
                if (facultyPref && facultyPref.delete && facultyPref.delete.length > 0) {
                    facultyPref.delete.forEach(deleteId => {
                        const deleteString = getFacultyPrefDeleteString();
                        connection.execute(deleteString, [deleteId], (err) => {
                            if (err) {
                                throw err;
                            }
                        });
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
                reject(new Error("Can't save the changes"));
            }
        });
    });
}

const getPersonalDetailsUpdateString = (personalDetails) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in personalDetails) {
        if (key) {
            updateString += `${key}=?, `;
            updatedValue.push(personalDetails[key]);
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.user SET ${updateString} WHERE id=?`, updatedValue };
}

const getLorRequestUpdateString = (lorRequest) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in lorRequest) {
        if (key) {
            updateString += `${key}=?, `;
            if (key === 'passout_date') {
                updatedValue.push(new Date(lorRequest[key]));
            } else if (key === 'letter_head') {
                updatedValue.push(parseInt(lorRequest[key]));
            } else {
                updatedValue.push(lorRequest[key]);
            }
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.lor_request SET ${updateString} WHERE user_id=?`, updatedValue };
}

const getAcadDetailsUpdateString = (acadDetail) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in acadDetail) {
        if (key) {
            updateString += `${key}=?, `;
            if (key == 'sem') {
                updatedValue.push(parseInt(acadDetail[key]));
            } else if (key == 'cgpa' || key == 'attendance') {
                updatedValue.push(parseFloat(acadDetail[key]));
            }
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.academic_details SET ${updateString} WHERE id=?`, updatedValue };
}

const getCompExamDetailsUpdateString = (compExamDetail) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in compExamDetail) {
        if (key) {
            updateString += `${key}=?, `;
            if (key == 'mark') {
                updatedValue.push(parseInt(compExamDetail[key]));
            } else {
                updatedValue.push(compExamDetail[key]);
            }
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.comp_exam_details SET ${updateString} WHERE id=?`, updatedValue };
}

const getUniPrefUpdateString = (uniPref) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in uniPref) {
        if (key) {
            updateString += `${key}=?, `;
            if (key === 'intake_date') {
                updatedValue.push(new Date(uniPref[key]));
            } else {
                updatedValue.push(uniPref[key]);
            }
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.uni_pref SET ${updateString} WHERE id=?`, updatedValue };
}

const getFacultyPrefUpdateString = (facultyPref) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in facultyPref) {
        if (key) {
            updateString += `${key}=?, `;
            updatedValue.push(facultyPref[key]);
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);
    return { updateString: `UPDATE lor.faculty_pref SET ${updateString} WHERE id=?`, updatedValue };
}

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

const getCompExamDetailDeleteString = () => {
    return `DELETE FROM lor.comp_exam_details WHERE id=?`;
}

const getUniPrefDeleteString = () => {
    return `DELETE FROM lor.uni_pref WHERE id=?`;
}

const getFacultyPrefDeleteString = () => {
    return `DELETE FROM lor.faculty_pref WHERE id=?`;
}