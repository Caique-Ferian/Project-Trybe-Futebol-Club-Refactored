import { Replace } from '@app/entities/helper/replace';
import User from '@app/entities/user/user';

export abstract class UserRepository {
  abstract findOne(
    user: Replace<User, { username?: string; role?: string }>,
  ): Promise<User>;
}
