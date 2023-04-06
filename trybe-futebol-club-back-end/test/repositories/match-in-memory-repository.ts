import { MatchRepository } from '@app/repositories/match-repository';
import { Match } from '@app/entities/match/match';

export class MatchInMemoryRepository implements MatchRepository {
  private matches: Match[] = [
    new Match({
      homeTeam: 'Flamengo',
      homeTeamGoals: 1,
      awayTeam: 'Botafogo',
      awayTeamGoals: 0,
      inProgress: true,
    }),
  ];
  public async findAll(): Promise<Match[]> {
    return this.matches;
  }
  public async create(match: Match): Promise<void> {
    await this.matches.push(match);
  }
  public async findByPk(id: string): Promise<Match | null> {
    return this.matches.find((e) => e.id === id);
  }
  public async update(match: Match): Promise<void> {
    const matchIndex = this.matches.findIndex((e) => e.id === match.id);
    if (matchIndex >= 0) {
      this.matches[matchIndex] = match;
    }
  }
}
