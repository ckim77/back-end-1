const express = require("express");
const cors = require("cors");
const app = express();


// middleware
app.use(cors());
app.use(express.json());

let friends = ["Nitin", "John", "Jeddy", "Cameron", "Riley", "Chris"];

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
})

app.get("/weather/:temp", (req,res) => {
    const {temp} = req.params;
    const phrase = `<h3>It is soooooo ${temp} today </h3>`;
    res.status(200).send(phrase);
})


// server
const SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => {
    console.log(`You are tuned into ${SERVER_PORT}`)
})