import { Pipe, PipeTransform } from '@angular/core';
import { Store } from './store';

@Pipe({
  name: 'filterWords'
})
export class FilterWordsPipe implements PipeTransform {

  transform(value?: Store[], term?: string): Store[] {
    return value?.filter(store => store.name.toLowerCase().indexOf(term?.toLowerCase()) > -1);
  }

}
