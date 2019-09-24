const express = require("express");

const app = express();

const axios = require("axios");

app.get("/data", (req, res) => {
  const data = [
    { id: 1, fisrtName: "Dana", lastName: "Falah" },
    { id: 2, fisrtName: "Ghassan", lastName: "Gharzuzy" },
    { id: 3, fisrtName: "Alaa", lastName: "Faour" }
  ];
  res.json(data);
});

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server start on port ${port}`));
