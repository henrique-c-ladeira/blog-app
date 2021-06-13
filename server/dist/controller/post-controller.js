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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const utils_1 = require("~/utils");
const errors_1 = require("~/errors");
const post_1 = require("~/model/post");
class PostController {
    constructor() {
        this.Posts = new post_1.PostModel();
        this.all = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const pageNumber = request.query.page;
            if (!pageNumber)
                throw new Error('Specify page number.');
            if (Number(pageNumber) < 1)
                throw new Error('Page number should be greater than or equal to 1.');
            const posts = yield this.Posts.getAll(pageNumber);
            response.status(200).send(posts);
        }));
        this.mostRecent = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.Posts.getRecent();
            response.status(200).send(posts);
        }));
        this.one = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const postId = request.params.id;
            if (!postId)
                throw new errors_1.BadRequestError();
            const post = yield this.Posts.getOne(postId);
            response.status(200).send(post);
        }));
        this.save = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const { title, subtitle } = request.body;
            if (!(title && subtitle)) {
                throw new errors_1.BadRequestError();
            }
            const token = jwt_decode_1.default(request.token);
            const author = token.name;
            const newPost = {
                id: title,
                title,
                subtitle,
                author,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const post = yield this.Posts.save(newPost);
            response.status(200).send(Object.assign({}, post));
        }));
        this.update = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const { id, title, subtitle } = request.body;
            if (!(title || subtitle) && !!id) {
                throw new errors_1.BadRequestError();
            }
            const post = yield this.Posts.getOne(id);
            const token = jwt_decode_1.default(request.token);
            const author = token.name;
            if (post.author !== author)
                throw new errors_1.UnauthorizedError();
            const fieldToUpdate = {
                title: title || post.title,
                subtitle: subtitle || post.subtitle,
            };
            const updatedPost = yield this.Posts.update(id, fieldToUpdate);
            response.status(200).send(Object.assign({}, updatedPost));
        }));
        this.remove = utils_1.catchError((request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const postId = request.params.id;
            if (!postId)
                throw new errors_1.BadRequestError();
            const post = yield this.Posts.getOne(postId);
            const token = jwt_decode_1.default(request.token);
            const author = token.name;
            if (post.author !== author)
                throw new errors_1.UnauthorizedError();
            yield this.Posts.remove(postId);
            response.sendStatus(204);
        }));
    }
}
exports.PostController = PostController;
//# sourceMappingURL=post-controller.js.map