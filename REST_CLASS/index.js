const express = require("express")
const app = express();
const port = 2000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

let posts = [
    {
        username: "helloji",
        content: "Kuchh nahi he"
    },
    {
        username: "Mera naam he Bulla",
        content: "Rakhta hu khulla"
    },
    {
        username: "Mera naam he Pote",
        content: "Jo apne baap ke bhi nahi hote"
    }
]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req,res) => {
    res.render("new.ejs")
})

app.post("/posts", (req,res) => {
    console.log(req.body)
    res.send("post request is working")
})

app.listen(port, () => {
    console.log(`This is my PORT ${port}`)
});
