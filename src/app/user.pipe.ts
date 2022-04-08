import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  fecha = Date.now();

  transform(value: string, today: string): unknown {
    return 'today ' + today;
  }

}
