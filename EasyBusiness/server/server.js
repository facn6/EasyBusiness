const path = require("path");
const express = require("express");

const app = express();
const postData = require("./models/queries/postData");
const getData = require("./models/queries/getData");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/data", (req, res) => {
  const data = [
    { id: 1, fisrtName: "Dana", lastName: "Falah" },
    { id: 2, fisrtName: "Ghassan", lastName: "Gharzuzy" },
    { id: 3, fisrtName: "Alaa", lastName: "Faour" }
  ];
  res.json(data);
});

app.post("/login", (req, res, next) => {
  postData(req.body)
    .then(res.send(true))
    .catch(err => next(err));
});

app.get(`/home`, async (req, res, next) => {
  const user = await getData.getData(req.query);
  if (user.length === 0) return res.send(false);
  if (user[0].password !== req.query.password) return res.send(false);
  return res.send(true);
});


app.get('/inventory',(req,res,next)=>{
getData.getInventoryData()
.then(inventoryData =>
  {
    res.send(inventoryData)
})
.catch(err => next(err));
})



var PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
