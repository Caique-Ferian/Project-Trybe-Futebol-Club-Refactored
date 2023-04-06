import { MatchRepository } from '@app/repositories/match-repository';
import { ConflictError } from '@app/use-cases/errors/conflict-error';
import { NotFound } from '@app/use-cases/errors/not-found-error';

import {
  UpdateMatchScoreRequest,
  CreateOrUpdateMatchResponse,
} from './types/index';

export class UpdateMatchScore {
  constructor(private matchRepository: MatchRepository) {}

  public async execute(
    request: UpdateMatchScoreRequest,
  ): Promise<CreateOrUpdateMatchResponse> {
    const { id, score, team } = request;

    if (team !== 'home' && team !== 'away') {
      throw new ConflictError('The team value, must be HOME or AWAY');
    }
    const match = await this.matchRepository.findByPk(id);
    if (!match) {
      throw new NotFound(
        'That match is not in progress anymore or the match does not exist',
      );
    }
    if (team === 'home') match.homeTeamGoals = score;
    if (team === 'away') match.awayTeamGoals = score;
    await this.matchRepository.update(match);
    return { match };
  }
}
