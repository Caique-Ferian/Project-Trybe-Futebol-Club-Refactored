import { Team } from './team';

describe('Team', () => {
  it('should be able to create a team', () => {
    const team = new Team({
      teamName: 'Flamengo',
    });
    expect(team).toBeInstanceOf(Team);
  });
});
