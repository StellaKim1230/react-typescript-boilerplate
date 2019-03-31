"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var actionTypes_1 = require("../actions/actionTypes");
var initialState = {
    reduxWorker: true
};
var sampleReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.SAMPLE_ACTION:
            return __assign({}, state, { reduxWork: false });
        default:
            return state;
    }
};
exports["default"] = sampleReducer;
