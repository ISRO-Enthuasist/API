const express = require('express');
const app = express.Router();
const cors = require('cors');
const { readFileSync } = require('fs');

app.use(cors());

app.get("/customers", (req, res) => {
    const data = JSON.parse(readFileSync('data/customers.json').toString());
    res.json(data)
})

module.exports = app;
