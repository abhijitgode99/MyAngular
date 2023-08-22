import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    console.log(value)
    debugger;
    return value.filter(function(search) {
      return search.productName.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    })
  }

}
