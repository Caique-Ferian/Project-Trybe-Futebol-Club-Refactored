import { Match } from '@app/entities/match/match';

export interface FindAllMatchesResponse {
  matches: Match[];
}

export interface CreateMatchRequest {
  homeTeam: string;
  homeTeamGoals: number;
  awayTeam: string;
  awayTeamGoals: number;
}

export interface CreateOrUpdateMatchResponse {
  match: Match;
}

export interface UpdateMatchScoreRequest {
  id: string;
  score: number;
  team: string;
}

export interface UpdateMatchStatusRequest {
  id: string;
}
