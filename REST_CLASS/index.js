const express = require("express")
const app = express();
const port = 2000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.send("Sahi chal raha he bhai ab aage kar");
})

app.listen(port, () => {
    console.log(`This is my PORT ${port}`)
});

