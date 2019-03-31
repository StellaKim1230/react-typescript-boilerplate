"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store");
var MainPage_1 = require("./pages/MainPage");
require("./index.scss");
var rootElement = document.getElementById('root');
var store = store_1.configureStore({
// ...initialize any prepared state
});
if (!rootElement)
    throw Error('Dom element div#root not found');
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(MainPage_1["default"], { title: '\uAC00\uACC4\uBD80' })), rootElement);
