const express = require('express');
const { readFileSync } = require('fs');
const app = express.Router()
const data = JSON.parse(readFileSync("data/launch-vehicles.json")); // for reducing time on request
const compression = require('compression');
app.use(compression()); // to make express fast

app.get("/vehicles", (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');// add caching
    res.json(data);
})

module.exports = app;
