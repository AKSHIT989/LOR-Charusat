const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getHODRequests = async (email) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT fp.id, usr.charusat_id, 
        CONCAT_WS(" ", usr.first_name, usr.last_name) as stu_name,
        fp.upload_lor,
        GROUP_CONCAT(IF(fp.approved, 
        CONCAT_WS(" ", "Verified by", fp.faculty_name), 
        CONCAT_WS(" ", "Not Verified by", fp.faculty_name))) as status,
        (SELECT remark FROM lor.faculty_pref WHERE user_id=usr.id AND faculty_email=usr.hod)
        as remark
        FROM lor.faculty_pref fp, lor.user usr 
        WHERE fp.user_id=usr.id AND usr.hod=? GROUP BY usr.charusat_id;`,
        [email],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result);
                } else {
                    reject(new Error("Can't fetch the requests"));
                }
            }
        });
    });
};