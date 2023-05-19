import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Submit handler
  onSubmit(f: any) {
    // Send values to console
    console.log(f.value);
    // Reset form
    f.reset();
  }
}
