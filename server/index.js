const express = require("express");
const cors = require("cors");
const app = express();


// middleware
app.use(cors());
app.use(express.json());

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley", "Chris"];

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
})





// server
const SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => {
    console.log(`You are tuned into ${SERVER_PORT}`)
})