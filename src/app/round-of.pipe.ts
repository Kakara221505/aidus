import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundOf'
})
export class RoundOfPipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
