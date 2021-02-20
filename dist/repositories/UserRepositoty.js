"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
        this.counterId = 1;
    }
    ;
    Object.defineProperty(UserRepository, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new UserRepository();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    UserRepository.prototype.listaAll = function () {
        return this.users;
    };
    UserRepository.prototype.listOne = function (userId) {
        var user = this.users.find(function (userAux) { return userAux.getId() === userId; });
        return user;
    };
    UserRepository.prototype.createOne = function (user) {
        user.setId(this.counterId);
        this.counterId++;
        this.users.push(user);
        return user;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
