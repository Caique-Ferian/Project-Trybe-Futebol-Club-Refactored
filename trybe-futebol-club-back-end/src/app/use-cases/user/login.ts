import { UserRepository } from '@app/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './types';
import { NotFound } from '@app/use-cases/errors/not-found-error';

@Injectable()
export class Login {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request;
    const login = await this.userRepository.findOne(email);
    if (!login || login.password !== password) {
      throw new NotFound('Incorrect email or password');
    }
    return { user: login };
  }
}
