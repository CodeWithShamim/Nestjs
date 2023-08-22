import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers(): string[] {
    return ['shamim', 'rafi'];
  }
}
