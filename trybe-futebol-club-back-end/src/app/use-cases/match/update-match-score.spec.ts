import { MatchInMemoryRepository } from '@test/repositories/match-in-memory-repository';
import { UpdateMatchScore } from './update-match-score';
import { ConflictError } from '@app/use-cases/errors/conflict-error';
import { NotFound } from '@app/use-cases/errors/not-found-error';

describe('UpdateMatchScore', () => {
  const inMemoryRepository = new MatchInMemoryRepository();
  const updateMatch = new UpdateMatchScore(inMemoryRepository);
  it('should be able to update a match score', async () => {
    const allMatches = await inMemoryRepository.findAll();
    const { match } = await updateMatch.execute({
      id: allMatches[0].id,
      score: 3,
      team: 'home',
    });
    expect(match.homeTeamGoals).toEqual(3);
  });
  it('should not be able to update a match  score if team option is different than HOME or AWAY', async () => {
    expect(() =>
      updateMatch.execute({
        id: 'fake-id',
        score: 20,
        team: 'test',
      }),
    ).rejects.toThrow(ConflictError);
  });
  it('should not be able to update a match  score if match does not exist or already ended', async () => {
    expect(() =>
      updateMatch.execute({
        id: 'fake-id',
        score: 2,
        team: 'away',
      }),
    ).rejects.toThrow(NotFound);
  });
});
