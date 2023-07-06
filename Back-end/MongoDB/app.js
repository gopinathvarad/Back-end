const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", () => {
    console.log(`Connected to MongoDB`)
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Taste Good"
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 35
});

//person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The Best fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log('Error inserting data');
//     } else {
//         console.log('Data inserted successfully!');
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function(fruit) { // In case if you want to loop into each characteristic
            console.log(fruit.name);
        });
    }
});




// Fruit.updateOne({ _id: "64a3ae4f3521285e1a571a8d" }, { name: "Peach" }, function(err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("Successfully Updated the Document");
//     }
// });





// Fruit.deleteOne({ name: "Peach" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted the Document");
//     }
// });



Person.deleteMany({ name: "John" }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted all the document");
    }
});