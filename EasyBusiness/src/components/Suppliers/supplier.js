import React, { useState, useEffect } from "react";
import "./supplier.css";
import MaterialTable from "material-table";
const Suppliers = () => {
  const [state, setState] = useState({
    columns: [],
    data: []
  });

  useEffect(() => {
    fetch("/suppliers")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setState({
          columns: [
            { title: "Id", field: "supplier_id", editable:"never" },
            { title: "Name", field: "supplier_name"},
            { title: "Phone Number", field: "supplier_phone_number" },
            { title: "Location", field: "supplier_location" },
            { title: "Products", field: "supplier_products" }
          ],
          data: data
        });
      })
      .catch(error => console.log(error));
  },[]);

  function deleteSupplier(supplierId) {
        
    fetch('/suppliers/delete',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        suppliers_id: supplierId
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  function addNewSupplier(supplierName,supplierPhoneNumber ,supplierLocation, supplierProducts) {
        
    fetch('/suppliers/add',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        supplier_name: supplierName,
        supplier_phone_number:supplierPhoneNumber,
        supplier_location:supplierLocation,
        supplier_products:supplierProducts
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }


  function updateSupplier(supplierId, supplierName,supplierPhoneNumber ,supplierLocation, supplierProducts) {
        
    fetch('/suppliers/update',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        supplier_id:supplierId,
        supplier_name: supplierName,
        supplier_phone_number:supplierPhoneNumber,
        supplier_location:supplierLocation,
        supplier_products:supplierProducts
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
      title="Suppliers Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              addNewSupplier(newData.supplier_name, newData.supplier_phone_number, newData.supplier_location , newData.supplier_products);
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              updateSupplier(newData.supplier_id ,newData.supplier_name, newData.supplier_phone_number, newData.supplier_location , newData.supplier_products);
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              deleteSupplier(oldData.supplier_id)
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
};
export default Suppliers;
