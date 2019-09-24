const express = require("express");

const app = express();


app.get("/data", (req, res) => {
  const data = [
    { id: 1, fisrtName: "Dana", lastName: "Falah" },
    { id: 2, fisrtName: "Ghassan", lastName: "Gharzuzy" },
    { id: 3, fisrtName: "Alaa", lastName: "Faour" }
  ];
  res.json(data);
});

var PORT = process.env.PORT || '5000';


app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
