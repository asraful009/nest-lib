import 'reflect-metadata';

const MY_PROP_METADATA_KEY = 'my-prop-metadata-key';

export interface MyPropOptions {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export function MyProp(options?: MyPropOptions): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Object, propertyKey: string | symbol) => {
    const metadata = { ...options };
    Reflect.defineMetadata(MY_PROP_METADATA_KEY, metadata, target, propertyKey);
  };
}

export const getMyPropOptions = <Type>(
  val: Type,
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Type,
  propertyKey: string | symbol,
): MyPropOptions | undefined => {
  console.log(Object.getOwnPropertyNames(val));
  return Reflect.getMetadata(MY_PROP_METADATA_KEY, target, propertyKey);
};
