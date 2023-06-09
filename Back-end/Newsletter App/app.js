const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { url } = require("inspector");
const https = require("https");

const app = express();

app.use(express.static("public")); // Have to Use this feature of express if the files are stored in the local disk 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const https = require("https");

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/5a391e100c";

    const options = {
        method: "POST",
        auth: "Gopi:2fb87b256c77906aed5d16db9ec1cca6-us1"
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure.html", function(req, res) {
    res.redirect("/")
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});




//API Key
//2fb87b256c77906aed5d16db9ec1cca6-us14

//List ID
//5a391e100c