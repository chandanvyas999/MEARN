const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'nothin'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Inserting new Data
/*let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}*/

/*try {
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
    });
} catch (err) {
    console.log(err);
}

connection.end();*/


//Home Route
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;
    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let count = (result[0]);
        res.render("home.ejs", { count });
    });
    } catch (err) {
        console.log(err);
        res.render("Some error in DB");
    }
})


//Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
    connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("showusers.ejs", { users });
    });
    } catch (err) {
        console.log(err);
        res.render("Some error in DB");
    }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        res.render("edit.ejs", { user: result[0] });
    });
    } catch (err) {
        console.log(err);
        res.render("Some error in DB");
    }
});

//UPDATE(DB) Route
app.patch("/user/:id", (req, res) => {
    req.send("Updating user");
    let {id} = req.params;
    let {password : formPassword, username : newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(formPassword != user.password) {
            res.send("Galat he bahai");
        } else {
            let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
            connection.query(q2, (err, result) => {
                if(err) throw err;
                res.send(result);
                res.redirect("/user");
            });
        }
    });
    } catch (err) {
        console.log(err);
        res.render("Some error in DB");
    }
})

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
})