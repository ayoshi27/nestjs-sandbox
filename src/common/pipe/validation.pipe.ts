import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ', value);
    console.log('metadata.type: ', metadata.type);
    console.log('metadata.metatype: ', metadata.metatype);
    console.log('metadata.data: ', metadata.data);
    const message = `${metadata.data}\'s type is ${metadata.metatype}. value = ${value}`;
    console.log(message);
    return value;
  }
}
