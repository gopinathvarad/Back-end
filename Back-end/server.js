const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World !</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at : gvarad2001@gmail.com")
});

app.get("/about", function(req, res) {
    res.send("<h1>This Website is designed by Gopinath</h1>")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffe</li><li>Code</li><li>Sports</li></ul>")
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});