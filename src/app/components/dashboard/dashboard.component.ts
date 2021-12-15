import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DashGiftSummaryModel } from 'src/app/models';
import { GiftDataService } from 'src/gift-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  summary$!: Observable<DashGiftSummaryModel>;

  constructor(private service: GiftDataService) { }

  ngOnInit(): void {
    this.summary$ = this.service.getData()
      .pipe(
        map(data => {
          return {
            numberToPurchase: data.length,
            items: data.map(item => item.description)
          } as DashGiftSummaryModel
        })
      )
  }
}
