export interface UserProps {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface TeamProps {
  teamName: string;
}

export interface MatchProps {
  homeTeam: string;
  homeTeamGoals: number;
  awayTeam: string;
  awayTeamGoals: number;
  inProgress: boolean;
}
