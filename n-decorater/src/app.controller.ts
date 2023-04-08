import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OrmQuerService } from './orm-query.service';
import { P } from './param/p.param';
import { Q } from './param/q.param';
import { getMyPropOptions } from './uppercase.decorater';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ormQuerService: OrmQuerService,
  ) {}

  @Get()
  getHello(@Query() p: P): string {
    // console.log(p, getMyPropOptions(p, P.prototype, 'area'));
    this.ormQuerService.getQuery<P>(p, P);
    return '';
  }
}
