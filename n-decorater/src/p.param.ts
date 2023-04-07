import { Length } from 'class-validator';
import { MyProp } from './uppercase.decorater';

export class P {
  @Length(10, 20)
  @MyProp({ required: true, maxLength: 10 })
  name: string;
}
