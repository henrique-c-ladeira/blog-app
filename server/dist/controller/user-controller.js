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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const utils_1 = require("~/utils");
const errors_1 = require("~/errors");
const user_1 = require("~/model/user");
class UserController {
    constructor() {
        this.Users = new user_1.UserModel();
        this.all = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.Users.getAll();
            response.status(200).send(users);
        }));
        this.one = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = request.params.id;
            if (!userId)
                throw new errors_1.BadRequestError();
            const user = yield this.Users.getOne(userId);
            response.status(200).send(user);
        }));
        this.save = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = request.body;
            if (!(name && email && password)) {
                throw new errors_1.BadRequestError();
            }
            const hashedPassword = yield utils_1.hash(password);
            const newUser = {
                name,
                email,
                password: hashedPassword,
            };
            const user = yield this.Users.save(newUser);
            response.status(200).send(Object.assign({}, user));
        }));
        this.remove = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = request.params.id;
            if (!userId)
                throw new errors_1.BadRequestError();
            yield this.Users.remove(userId);
            response.sendStatus(204);
        }));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map