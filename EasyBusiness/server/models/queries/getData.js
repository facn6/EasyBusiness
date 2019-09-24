const dbConnection = require("../database/db_connection");


const getData =({username,password})=> {
  return new Promise((resolve,reject)=>{
    dbConnection.query("SELECT * FROM users WHERE username=$1", [username],(err,res)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(res.rows);
    }
  });
  })
  
};



module.exports =getData;