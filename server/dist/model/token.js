"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.TokenModel = void 0;
const typeorm_1 = require("typeorm");
const jwt = __importStar(require("jsonwebtoken"));
const entity_1 = require("~/entity");
const utils_1 = require("~/utils");
const errors_1 = require("~/errors");
class TokenModel {
    constructor() {
        this.userRepository = typeorm_1.getRepository(entity_1.User);
        this.tokenRepository = typeorm_1.getRepository(entity_1.Token);
        this.create = (credentials) => __awaiter(this, void 0, void 0, function* () {
            const userToValidate = yield this.userRepository.findOneOrFail({
                email: credentials.email,
            });
            const isAutenticated = yield utils_1.checkHash(credentials.password, userToValidate.password);
            if (!isAutenticated) {
                throw new errors_1.UnauthorizedError();
            }
            if (!process.env.JWT_PRIVATE) {
                throw new Error('error in jwt token');
            }
            const token = jwt.sign({ id: userToValidate.id, name: userToValidate.name }, process.env.JWT_PRIVATE, {
                expiresIn: '1h',
            });
            return token;
        });
        this.invalidate = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.tokenRepository.save(token);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.TokenModel = TokenModel;
//# sourceMappingURL=token.js.map