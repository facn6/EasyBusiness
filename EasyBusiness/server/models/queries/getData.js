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
        const hashedPass = res.rows[0].password;

        bcrypt.compare(password, hashedPass, (err, ress) => {
          if (err) {
           return reject("Something wrong with the password");
          }
          if (!ress) {
            return reject("Password Incorrect");
          }
          console.log("password is correct");
          return resolve(res.rows);
          
        });
      }
    );
  });
};

const getInventoryData =()=> {
  return new Promise((resolve,reject)=>{
    dbConnection.query("SELECT *, product_name AS value,product_name AS label FROM inventory",(err,res)=>{
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

const getCustomersData =()=> {
  return new Promise((resolve,reject)=>{
    dbConnection.query("SELECT * FROM customers",(err,res)=>{
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
  getSuppliersData,
  getCustomersData
};
