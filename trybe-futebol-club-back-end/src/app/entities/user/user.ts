import { UserProps } from '@app/entities/types';

export default class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  public get username(): string {
    return this.props.username;
  }

  public get password(): string {
    return this.props.password;
  }

  public get email(): string {
    return this.props.email;
  }

  public get role(): string {
    return this.props.role;
  }
}
