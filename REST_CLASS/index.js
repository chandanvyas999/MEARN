const express = require("express")
const app = express();
const port = 2000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

let posts = [
    {
        id: "1a",
        username: "helloji",
        content: "Kuchh nahi he"
    },
    {
        id: "1b",
        username: "Mera naam he Bulla",
        content: "Rakhta hu khulla"
    },
    {
        id: "1c",
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
    let {username, content} = req.body;
    posts.push({username, content})
    res.redirect("/posts")
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
})

app.listen(port, () => {
    console.log(`This is my PORT ${port}`)
});
