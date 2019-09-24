const dbConnection = require("../database/db_connection");

const postData = (
    username,
    password,
    username_phone_number) => {
    return new Promise((resolve,reject)=>{
      console.log("post data"); //keep this to check if the controller got here
      
      dbConnection.query(
      "INSERT INTO users (username,password,username_phone_number) VALUES ($1, $2, $3)",
      [ username,
        password,
        username_phone_number],
      (err, res) => {
        if(err)
        {
          reject(err);
        }else{
          resolve(res);
        }
      });
    
  });
  }
  
  module.exports = postData;