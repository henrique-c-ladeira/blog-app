"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const controller_1 = require("./controller");
const auth_middleware_1 = require("./middlewares/auth-middleware");
exports.Routes = [
    {
        method: 'get',
        route: '/users',
        controller: controller_1.UserController,
        action: 'all',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'get',
        route: '/users/:id',
        controller: controller_1.UserController,
        action: 'one',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'post',
        route: '/users',
        controller: controller_1.UserController,
        action: 'save',
    },
    {
        method: 'delete',
        route: '/users/:id',
        controller: controller_1.UserController,
        action: 'remove',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'get',
        route: '/posts',
        controller: controller_1.PostController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/posts/:id',
        controller: controller_1.PostController,
        action: 'one',
    },
    {
        method: 'get',
        route: '/recent-posts',
        controller: controller_1.PostController,
        action: 'mostRecent',
    },
    {
        method: 'post',
        route: '/posts',
        controller: controller_1.PostController,
        action: 'save',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'put',
        route: '/posts',
        controller: controller_1.PostController,
        action: 'update',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'delete',
        route: '/posts/:id',
        controller: controller_1.PostController,
        action: 'remove',
        middlewares: [auth_middleware_1.verifyJWT],
    },
    {
        method: 'post',
        route: '/token',
        controller: controller_1.TokenController,
        action: 'create',
    },
    {
        method: 'delete',
        route: '/token',
        controller: controller_1.TokenController,
        action: 'invalidate',
        middlewares: [auth_middleware_1.verifyJWT],
    },
];
//# sourceMappingURL=routes.js.map