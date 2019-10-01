import React , {useState , useEffect} from "react";
import './supplier.css';
import MaterialTable from 'material-table';
const Suppliers = () =>{
const[state,setState] =useState({
  columns: [],
  data:[]
})

  useEffect(()=>{
    fetch('/suppliers' )
    .then(function(response){
       return response.json()
      })
    .then(function(data){ 
      setState({columns: [
        { title: 'Name', field:'supplier_name' },
        { title: 'Phone Number', field:'supplier_phone_number' },
        { title: 'Location', field:'supplier_location' },
        { title: 'Products', field:'supplier_products' }

      ],
      data:data});
      
          
    })
    .catch(error=> console.log(error));
  })
      return (
        <MaterialTable
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
                  data.push(newData);
                  setState({ ...state, data });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data[data.indexOf(oldData)] = newData;
                  setState({ ...state, data });
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...state, data });
                }, 600);
              }),
          }}
        />
        
      );

}
export default Suppliers;
