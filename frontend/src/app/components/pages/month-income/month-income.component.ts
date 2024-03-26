import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-month-income',
  templateUrl: './month-income.component.html',
  styleUrl: './month-income.component.css'
})


export class MonthIncomeComponent {
  month!: string;
  year!: number;
  monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
  ];
  tab: string = "sheet";

  constructor(private activatedRoute: ActivatedRoute){
    const currentDate = new Date();

    this.month = this.monthNames[currentDate.getMonth()];
    this.year = currentDate.getFullYear();

    activatedRoute.params.subscribe((params) => {
      if (params['tab'])
        this.tab = params['tab'];
    })
  }
}
