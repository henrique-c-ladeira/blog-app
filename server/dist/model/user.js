"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("~/entity");
class UserModel {
    constructor() {
        this.userRepository = typeorm_1.getRepository(entity_1.User);
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            const safeUsers = users.map((elem) => {
                const { name, email } = elem;
                return { name, email };
            });
            return safeUsers;
        });
        this.getOne = (userId) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne(userId);
            if (!user)
                throw new Error('There is no such user.');
            const { password } = user, safeUser = __rest(user, ["password"]);
            return safeUser;
        });
        this.save = (newUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userRepository.save(newUser);
                const { password } = newUser, safeUser = __rest(newUser, ["password"]);
                return safeUser;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
        this.remove = (userId) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented yet');
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.js.map