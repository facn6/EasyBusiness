const path = require("path");

const express = require("express");
var app = express();

const postData = require("../models/queries/postData");
const getData = require("../models/queries/getData");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("components", path.join(__dirname,'..',"components"));

app.post("/login", urlencodedParser, (req,res,next) => {
    postData(
        req.body.username,
        req.body.password,
        req.body.username_phone_number)
        .then(res.redirect('/login'))
        .catch(err=> next(err));    
})