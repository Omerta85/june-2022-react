"use strict";
exports.__esModule = true;
exports.axiosService = void 0;
var axios_1 = require("axios");
var axiosService = axios_1["default"].create({ baseURL: 'https://jsonplaceholder.typicode.com' });
exports.axiosService = axiosService;
