import { Length } from 'class-validator';

export class P {
  @Length(10, 20)
  @Uppercase
  name: string;
}
