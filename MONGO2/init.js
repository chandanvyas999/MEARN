const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("connection sucessfull")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from : "Chandan",
        to : "A Girl",
        message : "Hey! Chan we chat?",
        created_at : Date.now(),
    },
    {
        from : "Rahul",
        to : "A Girl",
        message : "Nice Profile?",
        created_at : Date.now(),
    },
    {
        from : "Ritik",
        to : "A Girl",
        message : "Mujhse Shadi karogi???",
        created_at : Date.now(),
    },
]

Chat.insertMany(allChats);