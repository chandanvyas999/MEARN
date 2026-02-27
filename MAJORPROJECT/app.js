const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hey Babe Welcome");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title : "New Home",
        description : "This is for rent",
        price : 1000,
        location : "Kabul",
        country : "Pakistan"
    });
    await sampleListing.save();
    console.log("Sample saved");
    res.send("Sucessful testing");
});

app.listen(5000, () => {
    console.log("Server is running");
});