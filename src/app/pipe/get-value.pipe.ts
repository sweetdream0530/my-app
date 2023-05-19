import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValue',
})
export class GetValuePipe implements PipeTransform {
  transform(obj: any, keys: string[]): any {
    // Loop through keys and return the first value that exists in the object
    for (let key of keys) {
      if (obj[key] !== undefined) {
        return obj[key];
      }
    }
    // Return null if no value exists
    return null;
  }
}
