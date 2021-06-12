import { getRepository } from 'typeorm';
import { User } from '~/entity';

export class UserModel {
  private readonly userRepository = getRepository(User);

  public getAll = async (): Promise<safeUser[]> => {
    const users = await this.userRepository.find();
    const safeUsers = users.map((elem) => {
      const { name, email } = elem;
      return { name, email };
    });
    return safeUsers;
  };

  public getOne = async (userId): Promise<safeUser> => {
    const user = await this.userRepository.findOne(userId);
    if (!user) throw new Error('There is no such user.');
    const { password, ...safeUser } = user;
    return safeUser;
  };

  public save = async (newUser: newUser): Promise<safeUser> => {
    try {
      await this.userRepository.save(newUser);
      const { password, ...safeUser } = newUser;
      return safeUser;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  public remove = async (userId): Promise<void> => {
    throw new Error('not implemented yet');
  };
}
