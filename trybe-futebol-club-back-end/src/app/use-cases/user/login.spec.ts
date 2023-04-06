import { UserInMemoryRepository } from '@test/repositories/user-in-memory-repository';
import { Login } from './login';
import { NotFound } from '@app/use-cases/errors/not-found-error';

describe('Login', () => {
  const inMemoryRepository = new UserInMemoryRepository();
  const login = new Login(inMemoryRepository);
  it('should be able to login with an existing user', async () => {
    const successfullyLogin = await login.execute({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });
    expect(successfullyLogin.user.email).toEqual(
      inMemoryRepository.users[0].email,
    );
  });
  it('should not be able to login with an incorrect user password', async () => {
    expect(() =>
      login.execute({
        email: 'admin@admin.com',
        password: 'secret_user',
      }),
    ).rejects.toThrow(NotFound);
  });
});
