import { getRepository } from 'typeorm';
import { Post } from '~/entity';

declare interface UpdatePost {
  title?: string;
  subtitle?: string;
}

export class PostModel {
  private readonly postRepository = getRepository(Post);

  public getAll = async (): Promise<Post[]> => {
    const posts = await this.postRepository.find();
    return posts;
  };

  public getOne = async (postId): Promise<Post> => {
    const post = await this.postRepository.findOne(postId);
    if (!post) throw new Error('There is no such post.');
    return post;
  };

  public save = async (post: Post): Promise<Post> => {
    try {
      await this.postRepository.save(post);
      return post;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  public update = async (id: string, post: UpdatePost): Promise<Post> => {
    try {
      await this.postRepository.update(id, post);
      const updatedPost = await this.postRepository.findOne(id);
      if (!updatedPost)
        throw new Error('An error happened while updating the post.');
      return updatedPost;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  public remove = async (postId): Promise<void> => {
    try {
      await this.postRepository.delete(postId);
    } catch (err) {
      throw new Error(err.message);
    }
  };
}
