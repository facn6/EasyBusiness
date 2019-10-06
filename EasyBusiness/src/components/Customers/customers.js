import React, { useState, useEffect } from "react";
import "./customers.css";
import MaterialTable from "material-table";
const Customers = () => {
  const [state, setState] = useState({
    columns: [],
    data: []
  });

  useEffect(() => {
    fetch("/customers")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setState({
          columns: [
            { title: "Id", field: "customer_id" , editable:"never" },
            { title: "Name", field: "customer_name" },
            { title: "Phone Number", field: "customer_phone_number" },
            { title: "Debt", field: "debt" }
          ],
          data: data
        });
      })
      .catch(error => console.log(error));
  },[]);

  function deleteCustomer(customerId) {
        
    fetch('/customers/delete',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_id: customerId
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  function addNewCustomer(customerName,customerPhoneNumber ,debt) {
        
    fetch('/customers/add',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_name: customerName,
        customer_phone_number:customerPhoneNumber,
        debt:debt
      })
      })
      .then(res => res.json())
      .catch(error => console.log(error));
  }


  function updateCustomer(customerId, customerName,customerPhoneNumber ,debt) {
        
    fetch('/customers/update',{

    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_id:customerId,
        customer_name: customerName,
        customer_phone_number:customerPhoneNumber,
        debt:debt
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
      title="Customers Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              addNewCustomer(newData.customer_name, newData.customer_phone_number, newData.debt);
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              updateCustomer(newData.customer_id ,newData.customer_name, newData.customer_phone_number, newData.debt)
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              deleteCustomer(oldData.customer_id)
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
};
export default Customers;
