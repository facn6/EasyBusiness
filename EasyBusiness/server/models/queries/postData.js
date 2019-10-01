const dbConnection = require("../database/db_connection");
const bcrypt = require("bcrypt");

const postData = ({
  username,
  password,
  username_phone_number: phone_number
}) => {
  // Hashing the password using Bycrypt

  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      console.log("Error with hashing function");
    } else {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "INSERT INTO users (username,password,username_phone_number) VALUES ($1, $2, $3)",
          [username, hash, phone_number],
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
      });
    }
  });
};

module.exports = postData;
