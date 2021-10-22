const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getHODRequests = async (email) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT 
		(SELECT id FROM lor.faculty_pref WHERE user_id=usr.id AND faculty_email=usr.hod) as id, 		
        usr.charusat_id, fp.approved,
        CONCAT_WS(" ", usr.first_name, usr.last_name) as stu_name,
        usr.email,
        (SELECT GROUP_CONCAT(IF(fp.approved, 
        CONCAT_WS(" ", "Verified by", fp.faculty_name), 
        CONCAT_WS(" ", "Not Verified by", fp.faculty_name))) 
        FROM lor.faculty_pref fp WHERE fp.user_id=usr.id GROUP BY fp.user_id) as status,
        (SELECT remark FROM lor.faculty_pref WHERE user_id=usr.id AND faculty_email=usr.hod)
        as remark,
        (SELECT stu_upload FROM lor.faculty_pref WHERE user_id=usr.id AND faculty_email=usr.hod)
        as stu_upload,
        (SELECT faculty_upload FROM lor.faculty_pref WHERE user_id=usr.id AND faculty_email=usr.hod)
        as faculty_upload
        FROM lor.faculty_pref fp, lor.user usr 
        WHERE fp.approved IS NULL 
        AND fp.user_id IN (SELECT fp.user_id FROM lor.faculty_pref fp WHERE fp.faculty_email=usr.hod AND fp.approved IS NULL)
        AND fp.user_id=usr.id AND usr.hod=? GROUP BY usr.charusat_id;`,
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