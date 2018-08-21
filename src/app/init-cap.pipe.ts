import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCap'
})
export class InitCapPipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.split(' ');
    const result = [];
    arr.forEach(word => result.push(word[0].toUpperCase() + word.substr(1).toLowerCase()));
    return result.join(' ');
  }

}
