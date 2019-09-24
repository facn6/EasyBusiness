const path = require("path");

const express = require("express");
var app = express();

const postData = require("../models/queries/postData");
const getData = require("../models/queries/getData");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.set("components", path.join(__dirname,'..','..','src',"components"));

app.post('/login', ({body},res,next) => {
    console.log("controlllerrrr");
    
    postData(
        {body})
        .then(res.redirect('/login'))
        .catch(err=> next(err));    
})