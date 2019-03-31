"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var sample_1 = require("./sample");
var reducers = redux_1.combineReducers({
    sample: sample_1["default"]
});
exports["default"] = reducers;
