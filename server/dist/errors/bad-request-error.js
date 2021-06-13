"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
class BadRequestError extends Error {
    constructor() {
        super('Bad Request');
        this.code = 400;
        this.description = 'Bad Request Error';
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=bad-request-error.js.map