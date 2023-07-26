const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
    title: String,
    content: String
};


const Article = mongoose.model("Article", articleSchema);

////////////////////////////// Requests Targetting all Articles ////////////////////////////////////////////

app.route("/articles")

.get(async function(req, res) {
    try {
        const foundArticles = await Article.find();
        res.send(foundArticles);
        // res.json(foundArticles); // Sending the articles as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
})

.post(function(req, res) {

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err) {
        if (!err) {
            res.send("Successfully added a new article");
        } else {
            res.send(err);
        }
    });
})

.delete(async function(req, res) {
    try {
        // Delete all articles
        await Article.deleteMany();
        res.send("Successfully deleted all the articles");
    } catch (err) {
        res.status(500).send(err);
    }
});



/////////////////////////////////////////////////Requests Targetting Specific Articles ///////////////////////////////////////

app.route("/articles/:articleTitle")

.get(async function(req, res) {
    try {
        const foundArticle = await Article.findOne({ title: req.params.articleTitle });

        if (foundArticle) {
            res.send(foundArticle);
        } else {
            res.send("No articles matching that title were found");
        }
    } catch (err) {
        // Handle any errors that occurred during the database query
        res.status(500).send("Internal server error");
    }
})

.put(async function(req, res) {
    try {
        await Article.update({ title: req.params.articleTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true });

        res.send("Successfully updated article");
    } catch (err) {
        // Handle any errors that occurred during the update
        res.status(500).send("Internal server error");
    }
})

.patch(async function(req, res) {
    try {
        await Article.updateOne({ title: req.params.articleTitle }, { $set: req.body });
        res.send('Successfully updated article');
    } catch (err) {
        res.send(err);
    }
})

.delete(async function(req, res) {
    try {
        await Article.deleteOne({ title: req.params.articleTitle });
        res.send('Successfully deleted the corresponding article');
    } catch (err) {
        res.send(err);
    }
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});