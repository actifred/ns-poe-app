import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nat-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  public laDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
