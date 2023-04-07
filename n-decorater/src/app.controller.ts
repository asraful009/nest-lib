import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { P } from './p.param';
import { getMyPropOptions } from './uppercase.decorater';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() p: P): string {
    console.log(p, getMyPropOptions(P.prototype, 'name'));

    return this.appService.getHello();
  }
}
