const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndUpdate({name : "Kya he be"}, {age : 34})

/*User.updateOne({name : "Chandan Vyas"}, {name : "Kya he be"}).then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})*/

/*User.find({age : {$gt: 20}}).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});*/

//Single Line Data Save
/*const user1 = new User({
    name : "Chandan Vyas",
    age : 21,
    email : "Fk@gmail.com"
})
const user2 = new User({
    name : "Hulu Vyas",
    age : 23,
    email : "Sk@gmail.com"
})

user1.save();
user2.save();

//Multiple Line Data Save
User.insertMany([{
    name : "Harish Vyas",
    age : 23,
    email : "Hv@gmail.com"
},
{
    name : "LULU Vyas",
    email : "Toramaike@gmail.com",
    age : 34
},
{
    name : "Haggu Vyas",
    email : "hagga@gmail.com",
    age : 56
}]).then((data) => {
    console.log(data);
});*/