import { MatchRepository } from '@app/repositories/match-repository';
import { Injectable } from '@nestjs/common';
import { ConflictError } from '@app/use-cases/errors/conflict-error';
import { CreateMatchRequest, CreateOrUpdateMatchResponse } from './types';
import { Match } from '@app/entities/match/match';

@Injectable()
export class CreateMatch {
  constructor(private matchRepository: MatchRepository) {}

  public async execute(
    request: CreateMatchRequest,
  ): Promise<CreateOrUpdateMatchResponse> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = request;

    if (homeTeam === awayTeam) {
      throw new ConflictError(
        'It is not possible to create a match with two equal teams',
      );
    }

    const match = new Match({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    await this.matchRepository.create(match);
    return { match };
  }
}
