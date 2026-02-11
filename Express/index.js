let express = require("express");
let app = express();

//console.dir(app);

let port = 1000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

//let requestCunt = 0;

/*app.use((req, res) => {
    requestCunt++;
    console.log(`${requestCunt}. New incoming request`);
    //res.send("Kyo bhai refresh nahi karega kya, Ek aur request nahi bhejani?");
    res.send({
        name: "Chandan Vyas",
        class: "12th", 
    })
});*/

//Ab yaha hum dekhenge Route Paths
//Yaha hum use ka nahi get se kaam karenge
/*app.get("/", (req, res) => {
    res.send("You connected route path");
});

app.get("/chandan", (req, res) => {
    res.send("You came here for chandan details");
});

app.get((req, res) => {
    res.status(404).send("Bhai ye kuchh galat to nahi aa gaya?");
});*/

//Path paramerers
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Hello @${username}`);
    console.log(req.params)
});

//Query String
app.get("/search", (req, res) =>{
    console.log(req.query);
    res.send("No Status");
});