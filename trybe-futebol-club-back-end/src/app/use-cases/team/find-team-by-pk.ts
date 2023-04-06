import { FindTeamByPkRequest, FindTeamByPkResponse } from './types';
import { TeamRepository } from '@app/repositories/team-repository';
import { NotFound } from '@app/use-cases/errors/not-found-error';

export class FindTeamByPk {
  constructor(private teamRepository: TeamRepository) {}

  public async execute(
    request: FindTeamByPkRequest,
  ): Promise<FindTeamByPkResponse> {
    const { id } = request;
    const team = await this.teamRepository.findByPk(id);
    if (!team) throw new NotFound('Team not found');
    return { team };
  }
}
