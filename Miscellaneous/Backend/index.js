const express = require("express");
const app = express();

const port = 1002;

app.listen(port, () => {
    console.log(`Ho raha he kya print zara dekhe to, Aur ye apna PORT: ${port}`);
});