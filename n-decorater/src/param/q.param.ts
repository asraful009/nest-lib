import { MyProp } from '../uppercase.decorater';

export class Q {
  @MyProp({ required: true, maxLength: 10 })
  nameQ: string;
  @MyProp({ required: true, maxLength: 13 })
  areaQ: string;
}
