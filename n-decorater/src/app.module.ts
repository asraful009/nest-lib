import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmQuerService } from './orm-query.service';
import { ValidationPipe } from './validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    OrmQuerService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
