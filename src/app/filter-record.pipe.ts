import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecord'
})
export class FilterRecordPipe implements PipeTransform {

  transform(value,keys:any, term: any): any {
    
    
    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
