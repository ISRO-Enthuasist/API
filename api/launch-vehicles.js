const express = require('express');
const { readFileSync } = require('fs');
const app = express.Router()

app.get("/vehicles", (req, res) => {
    const data = JSON.parse(readFileSync("data/launch-vehicles.json"));
    res.json(data);
})

module.exports = app;
