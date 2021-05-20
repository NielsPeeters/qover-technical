import { Injectable } from '@nestjs/common';
import { User } from './users';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        userName: 'Qover',
        password: 'ninja',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === username);
  }
}
