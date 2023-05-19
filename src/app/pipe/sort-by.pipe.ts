import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(arr: any[], prop: string): any[] {
    // Check if array and property are valid
    if (arr && prop) {
      // Copy the array to avoid mutating the original one
      let copy = [...arr];

      // Sort the copy by the property in ascending order using a compare function
      copy.sort((a, b) => {
        // Get the values of the property from both objects
        let x = a[prop];
        let y = b[prop];

        // Compare the values and return -1, 0 or 1 accordingly
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });

      // Return the sorted copy
      return copy;
    }
    // Return null if array or property are invalid
    return [];
  }
}
