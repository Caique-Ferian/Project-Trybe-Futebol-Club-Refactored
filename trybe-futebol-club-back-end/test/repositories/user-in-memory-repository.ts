import { User } from '@app/entities/user/user';
import { UserRepository } from '@app/repositories/user-repository';

export class UserInMemoryRepository implements UserRepository {
  public users: User[] = [
    new User({
      username: 'Admin',
      email: 'admin@admin.com',
      password: 'secret_admin',
      role: 'admin',
    }),
    new User({
      username: 'User',
      email: 'user@user.com',
      password: 'secret_user',
      role: 'user',
    }),
  ];
  public async findOne(email: string): Promise<User | null> {
    return this.users.find((e) => e.email === email);
  }
}
