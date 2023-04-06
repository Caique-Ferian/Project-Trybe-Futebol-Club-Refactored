import Team from '@app/entities/team/team';

export default abstract class TeamRepository {
  abstract findAll(): Promise<Team[]>;
  abstract findByPk(id: string): Promise<Team | null>;
}
