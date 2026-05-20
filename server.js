const express = require("express");

const app = express();

app.get("/", function (req, res) {

    res.send("Backend Working!");

});

app.listen(5000, function () {

    console.log("Server started");

});