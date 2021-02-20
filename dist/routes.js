"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("./controller/UserController");
var routes = express_1.Router();
routes.get('/users', UserController_1.UserController.instance.listaAll);
exports.default = routes;
