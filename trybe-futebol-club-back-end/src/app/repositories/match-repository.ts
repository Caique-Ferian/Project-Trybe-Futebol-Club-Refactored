import { Match } from '@app/entities/match/match';
import { MatchProps } from '@app/entities/types';

export abstract class MatchRepository {
  abstract findAll(): Promise<Match[]>;
  abstract create(match: MatchProps): Promise<Match | null>;
  abstract updateGameScore(
    id: string,
    score: number,
    team: string,
  ): Promise<Match | null>;
  abstract updateGameStatus(id: string): Promise<boolean | null>;
}
