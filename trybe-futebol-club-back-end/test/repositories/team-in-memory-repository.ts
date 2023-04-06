import { TeamRepository } from '@app/repositories/team-repository';
import { Team } from '@app/entities/team/team';

export class TeamInMemoryRepository implements TeamRepository {
  private teams: Team[] = [
    new Team({ teamName: 'Flamengo' }),
    new Team({ teamName: 'Botafogo' }),
  ];

  public async findAll(): Promise<Team[]> {
    return this.teams;
  }

  public async findByPk(id: string): Promise<Team | null> {
    return this.teams.find((e) => e.id === id);
  }
}
