import { TeamProps } from '@app/entities/types';
import { randomUUID } from 'crypto';

export class Team {
  private props: TeamProps;
  private _id: string;

  constructor(props: TeamProps) {
    this.props = props;
    this._id = randomUUID();
  }

  public get teamName(): string {
    return this.props.teamName;
  }
  public get id(): string {
    return this._id;
  }
}
