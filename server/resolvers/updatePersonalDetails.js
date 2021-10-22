const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.updatePersonalDetails = (user_id, personalDetails) => {
    let updateString = '';
    const updatedValue = [];
    for (const key in personalDetails) {
        if (key) {
            updateString += `${key}=?, `;
            updatedValue.push(personalDetails[key]);
        }
    }
    updateString = updateString.trim().substr(0, updateString.length - 2);

    return new Promise((resolve, reject) => {
        db.execute(`UPDATE lor.user SET ${updateString} WHERE id=?;`,
        [...updatedValue, user_id],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("Updated successfully");
            }
        });
    });
}