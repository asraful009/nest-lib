import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { P } from './p.param';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() p: P): string {
    console.log(p);

    return this.appService.getHello();
  }
}
