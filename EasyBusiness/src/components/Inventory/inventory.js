import React, { useState, useEffect } from "react";
import "./inventory.css";
import MaterialTable from "material-table";

const Inventory = () => {
  const [state, setState] = useState({
    columns: [],
    data:[],
    response: {}
  });

  useEffect(() => {

    fetch("/inventory")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setState({
          columns: [
            { title: "id", field: "product_id" , editable:"never" },
            { title: "Product", field: "product_name" },
            { title: "Price", field: "product_price" },
            { title: "Quantity", field: "product_quantity" },
            { title: "Supplier Price", field: "supplier_price" }
          ],
          data: data
        });
      })
      .catch(error => console.log(error));
  }, []);

  function deleteProduct(productId) {
        
    fetch('/inventory/delete',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product_id: productId
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  function addNewProduct(productName,productPrice ,productQuantity, supplierPrice) {
        
    fetch('/inventory/add',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product_name: productName,
        product_price:productPrice,
        product_quantity:productQuantity,
        supplier_price:supplierPrice
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }


  function updateProduct(productId, productName,productPrice ,productQuantity, supplierPrice) {
        
    fetch('/inventory/update',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product_id: productId,
        product_name: productName,
        product_price:productPrice,
        product_quantity:productQuantity,
        supplier_price:supplierPrice
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }
  return (
    <MaterialTable
      style={{ position: "unset" }}
      options={{
        searchFieldStyle: {
          marginTop: "40px",
          textAlignLast: "center",
          height: "40px",
          alignItems: "flex-start"
        }
      }}
      class="table"
      title="Inventory Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];              
              addNewProduct(newData.product_name, newData.product_price, newData.product_quantity , newData.supplier_price);
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
          
        onRowUpdate: (newData, oldData) =>
          
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              updateProduct(newData.product_id , newData.product_name , Number(newData.product_price), Number(newData.product_quantity) , Number(newData.supplier_price))
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {                        
            setTimeout(() => {
              resolve();
               const data = [...state.data];
              deleteProduct(oldData.product_id)

               data.splice(data.indexOf(oldData), 1);
               setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
};
export default Inventory;
