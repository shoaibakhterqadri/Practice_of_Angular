import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pkrDollar'
})
export class PkrDollarPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x;
  }

}
