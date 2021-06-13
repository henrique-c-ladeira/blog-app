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
exports.PostModel = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("~/entity");
class PostModel {
    constructor() {
        this.postRepository = typeorm_1.getRepository(entity_1.Post);
        this.getAll = (pageNumber) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postRepository.find({
                order: {
                    createdAt: 'DESC',
                },
                skip: 4 * (pageNumber - 1),
                take: 4,
            });
            return posts;
        });
        this.getRecent = () => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postRepository.find({
                order: {
                    createdAt: 'DESC',
                },
                take: 5,
            });
            return posts;
        });
        this.getOne = (postId) => __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postRepository.findOne(postId);
            if (!post)
                throw new Error('There is no such post.');
            return post;
        });
        this.save = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postRepository.save(post);
                return post;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
        this.update = (id, post) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postRepository.update(id, post);
                const updatedPost = yield this.postRepository.findOne(id);
                if (!updatedPost)
                    throw new Error('An error happened while updating the post.');
                return updatedPost;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
        this.remove = (postId) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postRepository.delete(postId);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.PostModel = PostModel;
//# sourceMappingURL=post.js.map