import { randomUUID } from 'crypto';
import { Replace } from '@app/entities/helper/replace';
import { MatchProps } from '@app/entities/types';

export default class Match {
  private props: Replace<MatchProps, { inProgress: boolean }>;
  private _id: string;

  constructor(
    props: Replace<MatchProps, { inProgress: boolean }>,
    id?: string,
  ) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get homeTeam(): string {
    return this.homeTeam;
  }

  public get homeTeamGoals(): number {
    return this.props.homeTeamGoals;
  }

  public set homeTeamGoals(homeTeamGoals: number) {
    this.props.homeTeamGoals = homeTeamGoals;
  }

  public get awayTeam(): string {
    return this.awayTeam;
  }

  public get awayTeamGoals(): number {
    return this.props.awayTeamGoals;
  }

  public set awayTeamGoals(awayTeamGoals: number) {
    this.props.awayTeamGoals = awayTeamGoals;
  }

  public get inProgress(): boolean {
    return this.props.inProgress;
  }

  public endGame() {
    this.props.inProgress = false;
  }
}
