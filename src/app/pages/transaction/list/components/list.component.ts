import { Component, OnInit, NgZone } from '@angular/core';

import { TransactionService } from '../../../../core/services'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  protected loaded:boolean = false;
  private sortAsc:boolean = false;
  protected transactions:Array<any> = [];

  public constructor(private transactionsService:TransactionService, private zone:NgZone) { }

  public ngOnInit() {
    this.transactionsService.getList()
      .subscribe(
        (r) => {
          this.transactions = r;
          this.sort();
          this.loaded = true;
        },
        (err) => console.log('err', err)
      )
  }


  public sort() {
    this.sortAsc = !this.sortAsc;
    this.zone.run(() => {
      this.transactions.sort((a,b) => {
        const r = a.created_at > b.created_at ? 1 : a.created_at === b.created_at ? 0 : -1;
        return this.sortAsc ? -r : r;
      })
    })
  }
}
