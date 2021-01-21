import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): any {
    if (value !== undefined && value.length > 300) {
      return value.substring(0, 300) + '...';
    } else {
      return value;
    }
  }

}
