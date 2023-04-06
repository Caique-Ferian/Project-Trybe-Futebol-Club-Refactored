import { Team } from '@app/entities/team/team';

export interface FindAllTeamsResponse {
  teams: Team[];
}

export interface FindTeamByPkRequest {
  id: string;
}

export interface FindTeamByPkResponse {
  team: Team;
}
