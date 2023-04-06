import { MatchRepository } from '@app/repositories/match-repository';
import { UpdateMatchStatusRequest, CreateOrUpdateMatchResponse } from './types';
import { NotFound } from '@app/use-cases/errors/not-found-error';
export class UpdateMatchStatus {
  constructor(private matchRepository: MatchRepository) {}

  public async execute(
    request: UpdateMatchStatusRequest,
  ): Promise<CreateOrUpdateMatchResponse> {
    const { id } = request;

    const match = await this.matchRepository.findByPk(id);

    if (!match) {
      throw new NotFound(
        'That match is not in progress anymore or the match does not exist',
      );
    }
    match.endGame();
    await this.matchRepository.update(match);
    return { match };
  }
}
