const express = require("express");
const app = express();

const port = 1002;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Ye apna responce he aur ye ji apne user : ${user}`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Ye POST request hai aur use ji bhaisahab ${user}`);
});

app.listen(port, () => {
    console.log(`Ho raha he kya print zara dekhe to, Aur ye apna PORT: ${port}`);
})