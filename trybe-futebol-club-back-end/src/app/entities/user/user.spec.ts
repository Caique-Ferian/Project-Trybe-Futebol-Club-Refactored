import User from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      username: 'test',
      password: 'test1234',
      email: 'test@example.com',
      role: 'admin',
    });

    expect(user).toBeInstanceOf(User);
  });
});
