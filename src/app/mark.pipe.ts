import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value!=undefined){
      return marked(value);
    }
  }

}
