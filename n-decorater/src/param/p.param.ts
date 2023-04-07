import { MyProp } from '../uppercase.decorater';

export class P {
  @MyProp({ required: true, maxLength: 10 })
  name: string;
  @MyProp({ required: true, maxLength: 13 })
  area: string;
}
