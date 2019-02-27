import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let symbol = ',';
    if (args) {
      if (args[0] === ',') {
        symbol = ',';
      } else if (args[0] === '.') {
        symbol = '.';
      } else {
        console.error('Wrong parameter: ' + args[0]);
      }
    }
    if (typeof value === 'number') {
      const meters = Math.floor(value / 100);
      const centimeters = value % 100;
      return meters + symbol + centimeters + 'm';
    } else {
      console.error('Error in height pipe: wrong type (must be a number):' + value );
    }
    return value;
  }

}
