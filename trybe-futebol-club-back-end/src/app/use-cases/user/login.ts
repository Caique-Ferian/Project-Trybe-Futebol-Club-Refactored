import { UserRepository } from '@app/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './types';
import { NotFound } from '@app/use-cases/errors/not-found-error';

@Injectable()
export class Login {
  constructor(private userRepository: UserRepository) {}

  public async execute(request: LoginRequest): Promise<LoginResponse> {
    const login = await this.userRepository.findOne(request.email);
    if (!login || login.password !== request.password) {
      throw new NotFound('Incorrect email or password');
    }
    return { token: login.email };
  }
}
