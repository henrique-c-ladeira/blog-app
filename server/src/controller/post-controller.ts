import jwt_decode from 'jwt-decode';
import { NextFunction, Request, Response } from 'express';
import { catchError } from '~/utils';
import { BadRequestError, UnauthorizedError } from '~/errors';
import { PostModel } from '~/model/post';

export class PostController {
  private readonly Posts = new PostModel();

  public all = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const pageNumber = request.query.page;
      if (!pageNumber) throw new Error('Specify page number.');
      if (Number(pageNumber) < 1)
        throw new Error('Page number should be greater than or equal to 1.');
      const posts = await this.Posts.getAll(pageNumber);
      response.status(200).send(posts);
    },
  );

  public mostRecent = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const posts = await this.Posts.getRecent();
      response.status(200).send(posts);
    },
  );

  public one = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const postId = request.params.id;
      if (!postId) throw new BadRequestError();
      const post = await this.Posts.getOne(postId);
      response.status(200).send(post);
    },
  );

  public save = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const { title, subtitle } = request.body;
      if (!(title && subtitle)) {
        throw new BadRequestError();
      }
      const token = jwt_decode<TokenInterface>(request.token);
      const author = token.name;
      const newPost = {
        id: title,
        title,
        subtitle,
        author,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const post = await this.Posts.save(newPost);

      response.status(200).send({ ...post });
    },
  );

  public update = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const { id, title, subtitle } = request.body;
      if (!(title || subtitle) && !!id) {
        throw new BadRequestError();
      }
      const post = await this.Posts.getOne(id);
      const token = jwt_decode<TokenInterface>(request.token);
      const author = token.name;
      if (post.author !== author) throw new UnauthorizedError();

      const fieldToUpdate = {
        title: title || post.title,
        subtitle: subtitle || post.subtitle,
      };
      const updatedPost = await this.Posts.update(id, fieldToUpdate);

      response.status(200).send({ ...updatedPost });
    },
  );

  public remove = catchError(
    async (request: Request, response: Response, next: NextFunction) => {
      const postId = request.params.id;
      if (!postId) throw new BadRequestError();
      const post = await this.Posts.getOne(postId);
      const token = jwt_decode<TokenInterface>(request.token);
      const author = token.name;
      if (post.author !== author) throw new UnauthorizedError();
      await this.Posts.remove(postId);
      response.sendStatus(204);
    },
  );
}
