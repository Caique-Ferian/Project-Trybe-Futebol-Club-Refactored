import { TeamRepository } from '@app/repositories/team-repository';
import { FindAllTeamsResponse } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllTeams {
  constructor(private teamRepository: TeamRepository) {}

  public async execute(): Promise<FindAllTeamsResponse> {
    const teams = await this.teamRepository.findAll();
    return { teams };
  }
}
