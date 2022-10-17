"use strict";
exports.__esModule = true;
var express = require("express");
var database_service_1 = require("./services/database-service");
var test_router_1 = require("./routes/test.router");
var app = express();
var port = 8080; // default port to listen
(0, database_service_1.connectToDatabase)()
    .then(function () {
    app.use("/tests", test_router_1.testsRouter);
    app.listen(port, function () {
        console.log("Server started at http://localhost:".concat(port));
    });
})["catch"](function (error) {
    console.error("Database connection failed", error);
    process.exit();
});
