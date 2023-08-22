  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'filterUser'
  })
  export class FilterUserPipe implements PipeTransform {
    
    transform(value: any, searchTearm: any): any {
      console.log(value)
      debugger;
      return value.filter(function(search) {
        return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
      })
    }
  }
