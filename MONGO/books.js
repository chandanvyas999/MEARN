const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type :String,
        required : true,
        maxLength : 20,
    },
    aurthor : {
    type : String,
    },
    price : {
        type : Number,
    },
    dicsount : {
        type : Number,
        default : 0,
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    aurthor : "Chandan Vyas",
    title : "Kuchh bhi lele",
    price : 2000,
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});