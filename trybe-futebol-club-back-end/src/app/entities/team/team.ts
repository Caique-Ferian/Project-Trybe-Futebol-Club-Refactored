import { TeamProps } from '../types';

export default class Team {
  private props: TeamProps;

  constructor(props: TeamProps) {
    this.props = props;
  }

  public get teamName(): string {
    return this.props.teamName;
  }
}
