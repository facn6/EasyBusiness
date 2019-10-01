import React from "react";
import "./table.css";

const Table = props => {
  console.log("propssss " , props.tdS);
  
  if(props.td !== undefined)
        {
  return(
  <table>
  <thead>
    <tr>
      
        {
          props.value.map((value,index)=>{
          return <th key={index}>{value}</th>
         })
        }
        
        
    </tr>
  </thead>
  <tbody>
      <tr>
      {
        
          props.td.map((value,index)=>{
            return <td key={index}>{value}</td>
          })
        }
      </tr>
  </tbody>
  </table>
  )
      }
}
export default Table;
