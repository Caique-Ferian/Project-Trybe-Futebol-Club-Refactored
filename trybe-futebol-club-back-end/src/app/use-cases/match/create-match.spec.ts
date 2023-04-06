import { MatchInMemoryRepository } from '@test/repositories/match-in-memory-repository';
import { CreateMatch } from './create-match';
import { ConflictError } from '@app/use-cases/errors/conflict-error';

describe('CreateMatch', () => {
  const inMemoryRepository = new MatchInMemoryRepository();
  const createMatch = new CreateMatch(inMemoryRepository);
  it('should be able to create a match', async () => {
    const { match } = await createMatch.execute({
      homeTeam: 'Corinthians',
      homeTeamGoals: 2,
      awayTeam: 'Palmeiras',
      awayTeamGoals: 1,
    });
    const allMatchs = await inMemoryRepository.findAll();
    expect(allMatchs).toHaveLength(2);
    expect(match.id).toEqual(allMatchs[1].id);
  });
  it('should not be able to create a match with equal homeTeam and awayTeam', async () => {
    expect(() =>
      createMatch.execute({
        homeTeam: 'Corinthians',
        homeTeamGoals: 2,
        awayTeam: 'Corinthians',
        awayTeamGoals: 1,
      }),
    ).rejects.toThrow(ConflictError);
  });
});
