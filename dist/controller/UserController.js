"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserRepositoty_1 = require("../repositories/UserRepositoty");
var UserController = /** @class */ (function () {
    function UserController() {
        this.users = [];
        this.counterId = 1;
    }
    ;
    Object.defineProperty(UserController, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new UserController();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    UserController.prototype.listaAll = function (req, res) {
        return res.send(UserRepositoty_1.UserRepository.instance.listaAll());
    };
    UserController.prototype.listOne = function (userId) {
        var user = this.users.find(function (userAux) { return userAux.getId() === userId; });
        return user;
    };
    UserController.prototype.createOne = function (user) {
        user.setId(this.counterId);
        this.counterId++;
        this.users.push(user);
        return user;
    };
    return UserController;
}());
exports.UserController = UserController;
