import { Injectable } from '@nestjs/common';
import 'reflect-metadata';
import { P } from './param/p.param';

@Injectable()
export class OrmQuerService {
  private readonly MY_PROP_METADATA_KEY = 'my-prop-metadata-key';
  // public constructor(clazz: TYPE) {
  //   this.__clazz = clazz;
  // }

  public getQuery<TYPE>(s: TYPE, classRef: { new (arg: string) }): string {
    console.log(classRef);

    const propertyKeys: string[] = Object.getOwnPropertyNames(s);
    for (const key of propertyKeys) {
      console.log({
        k: key,
        op: Reflect.getMetadata(
          this.MY_PROP_METADATA_KEY,
          classRef.prototype,
          key,
        ),
        v: s[key],
      });
    }
    return '';
  }
}
