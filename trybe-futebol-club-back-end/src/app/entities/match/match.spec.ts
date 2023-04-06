import Match from './match';

describe('Match', () => {
  it('should be able to create a match', () => {
    const match = new Match({
      homeTeam: 'Flamengo',
      homeTeamGoals: 1,
      awayTeam: 'Botafogo',
      awayTeamGoals: 0,
      inProgress: true,
    });
    expect(match).toBeInstanceOf(Match);
  });
});
