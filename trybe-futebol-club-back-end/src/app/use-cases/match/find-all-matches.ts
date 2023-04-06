import { MatchRepository } from '@app/repositories/match-repository';
import { FindAllMatchesResponse } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllMatches {
  constructor(private matchRepository: MatchRepository) {}

  public async execute(): Promise<FindAllMatchesResponse> {
    const matches = await this.matchRepository.findAll();
    return { matches };
  }
}
