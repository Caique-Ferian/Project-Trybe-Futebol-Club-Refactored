import { Match } from '@app/entities/match/match';

export abstract class MatchRepository {
  abstract findAll(): Promise<Match[]>;
  abstract create(match: Match): Promise<void>;
  abstract findByPk(id: string): Promise<Match | null>;
  abstract update(match: Match): Promise<void>;
}
