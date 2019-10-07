import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "../Button/button";
import CreatableSelect from 'react-select/creatable';

const Home = () => {
  const [state, setState] = useState({
    columns: [],
    data:[],
    response: {}
  });
  const [product, setProduct]=useState([{product:"" , quantity:"" , price:"" , supplier_price:""}]);
  const [sum, setSum]=useState(0);
  const [profit , setProfit] = useState(0);


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


  const handleChange = (newValue, actionMeta) => {
    setProduct([...product,{product:newValue.product_name , price:newValue.product_price , quantity:1 , supplier_price:newValue.supplier_price}]);
    setSum(sum+newValue.product_price);
    setProfit(profit+(Number(newValue.product_price)-Number(newValue.supplier_price)));
    

  };
  const handleInputChange = (inputValue, actionMeta) => {

  };

  const addNewDeal = (totalProfit , totalSum)=>{
    fetch('/deals/add',{
      method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          deal_date_created:new Date(),
          deal_profit : totalProfit,
          deal_total: totalSum
        })
        })
        .then(res => res.json())
        .catch(error => console.log('ojnjhuhuhu',error));
    
  }
  return (
    <form>
      <section className="search-bar">
      <CreatableSelect
        isClearable
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={state.data}
      />
      </section>
      <table className="home-table">
        <tr className="home-tr">
          <th className="home-th">Product</th>
          <th className="home-th">Price</th>
          <th className="home-th">Quantitiy</th>
        </tr>
          {product.map(function(item,i) {   
            return (
          <tr className="home-tr" key={i}>
          <td className="home-td" >{item.product} </td>
          <td className="home-td"  >{item.price} </td>
          <td className="home-td">{item.quantity} </td>
        </tr>
          )
        })}   
      </table>
      <section className="total">{sum}  </section>
      <section className="submit">
        <input class="hbutton" type="submit" value="Submit" onClick={(e) => {
          //e.preventDefault()
          addNewDeal(profit, sum)}} />
      </section>
    </form>
  );
};

export default Home;
