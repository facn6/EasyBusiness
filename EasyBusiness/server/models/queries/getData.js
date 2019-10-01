const dbConnection = require("../database/db_connection");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const getData = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "SELECT * FROM users WHERE username=$1",
      [username],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        if (res.rows.length === 0) {
          return reject("User not found in our Database");
        }
        console.log(res.rows);
        //res.rows[0].password - hashed password in our db
        const hashedPass = res.rows[0].password;

        bcrypt.compare(password, hashedPass, (err, res) => {
          if (err) {
            reject("Something wrong with the password");
          }
          if (!res) {
            reject("Password Incorrect");
          }
          console.log("password is correct");
          resolve(res.rows);
        });
      }
    );
  });
};

const getInventoryData =()=> {
  return new Promise((resolve,reject)=>{
    dbConnection.query("SELECT * FROM inventory",(err,res)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(res.rows);
    }
  });
  })
  
};

const getSuppliersData =()=> {
  return new Promise((resolve,reject)=>{
    dbConnection.query("SELECT * FROM suppliers",(err,res)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(res.rows);
    }
  });
  })
  
};


module.exports = 
{
  getData
  ,getInventoryData,
  getSuppliersData
};
