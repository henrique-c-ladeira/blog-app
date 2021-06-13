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
exports.TokenController = void 0;
const utils_1 = require("~/utils");
const errors_1 = require("~/errors");
const token_1 = require("~/model/token");
class TokenController {
    constructor() {
        this.Token = new token_1.TokenModel();
        this.create = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            if (!(email && password))
                throw new errors_1.BadRequestError();
            const token = yield this.Token.create({ email, password });
            response.status(200).send({ jwt: token });
        }));
        this.invalidate = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const tokenToInvalidate = { id: request.token };
            yield this.Token.invalidate(tokenToInvalidate);
            response.sendStatus(204);
        }));
    }
}
exports.TokenController = TokenController;
//# sourceMappingURL=token-controller.js.map