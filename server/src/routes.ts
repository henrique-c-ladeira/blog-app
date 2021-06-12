import { UserController, TokenController, PostController } from './controller';
import { verifyJWT } from './middlewares/auth-middleware';

export const Routes = [
  {
    method: 'get',
    route: '/users',
    controller: UserController,
    action: 'all',
    middlewares: [verifyJWT],
  },
  {
    method: 'get',
    route: '/users/:id',
    controller: UserController,
    action: 'one',
    middlewares: [verifyJWT],
  },
  {
    method: 'post',
    route: '/users',
    controller: UserController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/users/:id',
    controller: UserController,
    action: 'remove',
    middlewares: [verifyJWT],
  },
  {
    method: 'get',
    route: '/posts',
    controller: PostController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/posts/:id',
    controller: PostController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/posts',
    controller: PostController,
    action: 'save',
    middlewares: [verifyJWT],
  },
  {
    method: 'put',
    route: '/posts',
    controller: PostController,
    action: 'update',
    middlewares: [verifyJWT],
  },
  {
    method: 'delete',
    route: '/posts/:id',
    controller: PostController,
    action: 'remove',
    middlewares: [verifyJWT],
  },
  {
    method: 'post',
    route: '/token',
    controller: TokenController,
    action: 'create',
  },
  {
    method: 'delete',
    route: '/token',
    controller: TokenController,
    action: 'invalidate',
    middlewares: [verifyJWT],
  },
];
