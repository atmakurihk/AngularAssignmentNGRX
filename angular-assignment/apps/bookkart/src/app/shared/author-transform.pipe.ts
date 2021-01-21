import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorTransform'
})
export class AuthorTransformPipe implements PipeTransform {

  authorData = '';
  transform(value: Array<string>): string {
    if (value.length > 1) {

      this.authorData = value.join(' & ');
    }
    else {
      this.authorData = value[0];
    }
    return this.authorData;
  }

}
