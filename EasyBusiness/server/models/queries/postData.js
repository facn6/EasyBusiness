const dbConnection = require("../database/db_connection");
const bcrypt = require("bcrypt");

const postUserData = ({
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

const postInventoryData = ({
  product_name,
  product_price,
  product_quantity,
  supplier_price
}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "INSERT INTO inventory (product_name, product_price, product_quantity,supplier_price) VALUES ($1, $2, $3,$4)",
          [product_name, product_price, product_quantity,supplier_price],
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
  });
};

const updateInventoryData = ({
  product_id,
  product_name,
  product_price,
  product_quantity,
  supplier_price
}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "UPDATE inventory SET product_name=$2 , product_price=$3 , product_quantity=$4 , supplier_price=$5 WHERE product_id=$1",
          [product_id,product_name, product_price, product_quantity,supplier_price],
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
  });
};

const deleteInventoryData = ({product_id:productId}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "DELETE FROM inventory WHERE product_id=$1",
          [productId],
          (err, res) => {
            if (err) {
              reject(err);
            } else {              
              resolve(res);
            }
          }
        );
  });
};

const postCusomerData = ({
  customer_name,
  customer_phone_number,
  debt
}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "INSERT INTO customers (customer_name, customer_phone_number, debt) VALUES ($1, $2, $3)",
          [customer_name, customer_phone_number, debt],
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
  });
};

const updateCusomerData = ({
  customer_id,
  customer_name,
  customer_phone_number,
  debt
}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "UPDATE customers SET customer_name=$2 , customer_phone_number=$3 , debt=$4  WHERE customer_id=$1",
          [customer_id ,customer_name, customer_phone_number, debt],
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
  });
};

const deleteCusomerData = ({customer_id:customerId}) => {
      return new Promise((resolve, reject) => {
        dbConnection.query(
          "DELETE FROM customers WHERE customer_id=$1",
          [customerId],
          (err, res) => {
            if (err) {
              reject(err);
            } else {              
              resolve(res);
            }
          }
        );
  });
};


module.exports = {
  postUserData,
  postInventoryData,
  deleteInventoryData,
  updateInventoryData,
  postCusomerData,
  updateCusomerData,
  deleteCusomerData
}
