const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
});
app.get("/saludo", function (req, res){
    res.send("holaaa")
});
app.get("/imagen", function (req, res){
    res.sendFile(__dirname + "/patricio.jpg")
});

app.listen(3000, function(){
    console.log("listen puerto 3000...");
})