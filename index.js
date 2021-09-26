const express = require('express');
const centers_api = require("./api/centers");
const customers_api = require('./api/customers');
const launch_vehicles = require("./api/launch-vehicles");
const spacecrafts_api = require("./api/spacecrafts");
const app = express();
const compression = require('compression');
app.use(compression()); // to make express fast

app.use("/", centers_api);
app.use("/", customers_api);
app.use("/", launch_vehicles);
app.use("/", spacecrafts_api);
app.get("/", (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // add caching
    res.sendFile(__dirname + "/index.html")
})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});