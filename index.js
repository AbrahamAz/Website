const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(express.static("Animation"));
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.POST || 3000, function() {
  console.log("Server running at port 3000");
})