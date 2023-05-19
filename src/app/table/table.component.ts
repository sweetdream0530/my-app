import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // Data observable
  data$: Observable<any[]> = of([]);

  // Statistics
  minPrice: number = 0;
  maxPrice: number = 0;
  avgPrice: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Get data from API endpoint
    this.data$ = this.http.get<any[]>(
      'https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest'
    );

    // Subscribe to data observable and calculate statistics
    this.data$.subscribe((data: any[]) => {
      // Check if data is not empty
      if (data.length > 0) {
        // Initialize min and max prices to the first item's price per passenger
        this.minPrice =
          data[0].pricePerPassenger || data[0].pricePerPerson || 0;
        this.maxPrice = this.minPrice;

        // Initialize sum of prices to zero
        let sum = 0;

        // Loop through data and update min, max and sum of prices
        for (let item of data) {
          // Get the price per passenger of the current item
          let price = item.pricePerPassenger || item.pricePerPerson || 0;

          // Update min and max prices if needed
          if (price < this.minPrice) {
            this.minPrice = price;
          }
          if (price > this.maxPrice) {
            this.maxPrice = price;
          }

          // Update sum of prices
          sum += price;
        }

        // Calculate average price by dividing sum by length of data
        this.avgPrice = sum / data.length;
      }
    });
  }
}
