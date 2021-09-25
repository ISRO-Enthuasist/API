const app = require('express')()
const bodyParser = require('body-parser')
const { readFileSync } = require('fs')
const cors = require('cors');

app.use(cors());


app.get('/centers', function (req, res) {
    const data = JSON.parse(readFileSync("data/centers.json").toString());
    res.json(data);
})


module.exports = app;
