"use strict"

const db = require("../config/db")

class UserStorage {

    static getUserInfo(id) {
        return new Promise( (resolve, reject) => {
            const sql = "SELECT * FROM users WHERE id = ?;";
        
            db.query(sql, [id], (err, data) => {
                // console.log(data);
                if (err) reject(err);
                else resolve(data[0]);
            });
        });
        
    }
}

module.exports = UserStorage;