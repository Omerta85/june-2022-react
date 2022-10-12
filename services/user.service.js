"use strict";
exports.__esModule = true;
exports.userService = void 0;
var axios_service_1 = require("./axios.service");
var userService = {
    getAll: function () { return axios_service_1.axiosService.get("/users"); },
    getById: function (id) { return axios_service_1.axiosService.get("/users/".concat(id)); }
};
exports.userService = userService;
