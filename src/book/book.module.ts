/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { LoggerMiddleware } from 'src/middlewares/Logger.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}
