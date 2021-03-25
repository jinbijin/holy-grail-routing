import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
  transform(value: string[], joinBy: string = ',') {
    return value.join(joinBy);
  }
}
