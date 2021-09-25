const app = require('express')()
const { readFileSync } = require('fs')
const cors = require('cors');
const compression = require('compression');
app.use(compression()); // to make express fast

app.use(cors());
const data = JSON.parse(readFileSync("data/centers.json").toString()); // for reducing time on request

app.get('/centers', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=86400');// add caching
    res.json(data);
})


module.exports = app;
