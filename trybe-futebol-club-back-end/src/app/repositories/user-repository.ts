import { User } from '@app/entities/user/user';

export abstract class UserRepository {
  abstract findOne(email: string): Promise<User | null>;
}
