import { TeamInMemoryRepository } from '@test/repositories/team-in-memory-repository';
import { FindTeamByPk } from './find-team-by-pk';
import { NotFound } from '@app/use-cases/errors/not-found-error';

describe('FindTeamByPk', () => {
  const inMemoryRepository = new TeamInMemoryRepository();
  const findTeamByPk = new FindTeamByPk(inMemoryRepository);
  it('should be able to find a team with a correct PK', async () => {
    const inMemoryTeams = await inMemoryRepository.findAll();
    const { team } = await findTeamByPk.execute({
      id: inMemoryTeams[0].id,
    });
    expect(team.teamName).toEqual(inMemoryTeams[0].teamName);
  });
  it('should not be able to find a team with a incorrect PK', async () => {
    expect(() => findTeamByPk.execute({ id: 'fake-id-test' })).rejects.toThrow(
      NotFound,
    );
  });
});
