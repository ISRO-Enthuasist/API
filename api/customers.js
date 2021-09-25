const express = require('express');
const app = express.Router();
const cors = require('cors');
const { readFileSync } = require('fs');
const data = JSON.parse(readFileSync("data/customers.json").toString()); // for reducing time on request
const compression = require('compression');
app.use(compression()); // to make express fast

app.use(cors());

app.get("/customers", (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');// add caching
    res.json(data)
})

module.exports = app;
