import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCurrencyCode',
})
export class GetCurrencyCodePipe implements PipeTransform {
  // Object that maps currency symbols to ISO codes
  currencySymbols: { [key: string]: string } = {
    $: 'USD',
    '€': 'EUR',
    '£': 'GBP',
    '¥': 'JPY',
    '₹': 'INR',
    '₩': 'KRW',
    '₽': 'RUB',
    R$: 'BRL',
    C$: 'CAD',
    A$: 'AUD',
    NZ$: 'NZD',
  };

  transform(obj: { [key: string]: any }, keys: string[]): any {
    // Loop through keys and return the first value that exists in the object
    for (let key of keys) {
      if (obj[key] !== undefined) {
        // If the value is a currency code, return it as is
        if (key === 'currencyCode') {
          return obj[key];
        }
        // If the value is a currency symbol, return the corresponding ISO code from the object
        if (key === 'currencySymbol') {
          return this.currencySymbols[obj[key]] || null;
        }
      }
    }
    // Return null if no value exists
    return null;
  }
}
