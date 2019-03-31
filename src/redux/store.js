"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var reducers_1 = require("./reducers");
// const composeEnhancer = DEV ? composeWithDevTools : compose
exports.configureStore = function (initialState) { return redux_1.createStore(reducers_1["default"], initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware())); };
