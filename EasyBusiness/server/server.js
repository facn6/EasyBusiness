const path = require("path");
const express = require("express");
require("env2")("config.env");

const app = express();
const postData = require("./models/queries/postData");
const getData = require("./models/queries/getData");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../build")));

app.get("/data", (req, res) => {
const data = [
  { id: 1, fisrtName: "Dana", lastName: "Falah" },
  { id: 2, fisrtName: "Ghassan", lastName: "Gharzuzy" },
  { id: 3, fisrtName: "Alaa", lastName: "Faour" }
];
res.json(data);
});

app.post("/register", (req, res, next) => {
postData.postUserData(req.body)
  .then(res.send(true))
  .catch(err => next(err));
});

app.get(`/login`, async (req, res, next) => {  
  try {
    const user = await getData.getData(req.query);    
    if (user.length === 0) return res.send({success:false});
    return res.send({success: true});
    
  } catch (error) {
    return res.send({success: false});
    
  }
});
app.get('/deals',(req,res,next)=>{
  getData.getDealData()
  .then(dealData =>
  {
    res.send(dealData)
  })
  .catch(err => next(err));
  })

app.post('/deals/add',(req,res,next)=>{  
  console.log("request " , req.body);
  
  postData.postDealData(req.body)
  .then(dealData =>
    {
      res.send(dealData)
  })
  .catch(err => next(err));
  })
  
app.get('/inventory',(req,res,next)=>{
getData.getInventoryData()
.then(inventoryData =>
{
  res.send(inventoryData)
})
.catch(err => next(err));
})

app.post('/inventory/delete',(req,res,next)=>{  
postData.deleteInventoryData(req.body)
.then(inventoryData =>
  {
    res.send(inventoryData)
})
.catch(err => next(err));
})

app.post('/inventory/add',(req,res,next)=>{  
postData.postInventoryData(req.body)
.then(inventoryData =>
  {
    res.send(inventoryData)
})
.catch(err => next(err));
})

app.post('/inventory/update',(req,res,next)=>{  
  postData.updateInventoryData(req.body)
  .then(inventoryData =>
    {
      res.send(inventoryData)
  })
  .catch(err => next(err));
  })
    
app.get('/suppliers',(req,res,next)=>{
  getData.getSuppliersData()
  .then(SuppliersData =>
    {
      res.send(SuppliersData)
  })
  .catch(err => next(err));
  })

app.post('/suppliers/delete',(req,res,next)=>{  
  postData.deleteSupplierData(req.body)
  .then(SuppliersData =>
    {
      res.send(SuppliersData)
  })
  .catch(err => next(err));
  })

app.post('/suppliers/add',(req,res,next)=>{  
  postData.postSupplierData(req.body)
  .then(SuppliersData =>
    {
      res.send(SuppliersData)
  })
  .catch(err => next(err));
})
  
app.post('/suppliers/update',(req,res,next)=>{  
  postData.updateSupplierData(req.body)
  .then(SuppliersData =>
    {
      res.send(SuppliersData)
  })
  .catch(err => next(err));
})
  
app.get('/customers',(req,res,next)=>{
  getData.getCustomersData()
  .then(CustomersData =>
    {
      res.send(CustomersData)
  })
  .catch(err => next(err));
})
  
app.post('/customers/delete',(req,res,next)=>{  
  postData.deleteCusomerData(req.body)
  .then(CustomersData =>
    {
      res.send(CustomersData)
  })
  .catch(err => next(err));
})

app.post('/customers/add',(req,res,next)=>{  
  postData.postCusomerData(req.body)
  .then(CustomersData =>
    {
      res.send(CustomersData)
  })
  .catch(err => next(err));
})

app.post('/customers/update',(req,res,next)=>{  
  postData.updateCusomerData(req.body)
  .then(CustomersData =>
    {
      res.send(CustomersData)
  })
  .catch(err => next(err));
})

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
