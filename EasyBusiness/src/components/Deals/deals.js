import React, { useState, useEffect } from "react";
import "./deals.css";
import MaterialTable from "material-table";

const Inventory = () => {
  const [state, setState] = useState({
    columns: [],
    data:[],
    response: {}
  });

  useEffect(() => {

    fetch("/deals")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setState({
          columns: [
            { title: "Id", field: "deal_id"  },
            { title: "Date", field: "deal_date_created" },
            { title: "Profit", field: "deal_profit" },
            { title: "Total Price", field: "deal_total" },
          ],
          data: data
        });
      })
      .catch(error => console.log(error));
  }, []);

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
      title="Deal Table"
      columns={state.columns}
      data={state.data}
    />
  );
};
export default Inventory;
