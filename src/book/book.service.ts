/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getBooks(): string {
    return 'all books';
  }
}
