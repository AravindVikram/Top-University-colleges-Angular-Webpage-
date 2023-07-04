import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullCheck'
})
export class NullCheckPipe implements PipeTransform {

  transform(value: any): unknown {
    if (value === ''){
      return 'not available';
    }
    else{
      return value
    }
  }

}
