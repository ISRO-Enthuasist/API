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

app.listen(
    8080, () => {
        console.log("Server started on port 8080 check http://localhost:8080");
    }
)
