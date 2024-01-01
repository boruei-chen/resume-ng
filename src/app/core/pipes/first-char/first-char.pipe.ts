import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})
export class FirstCharPipe implements PipeTransform {
  transform (value: string): string {
    return value ? value.replace(/\s/g, '').split('')[0] : value;
  }
}
