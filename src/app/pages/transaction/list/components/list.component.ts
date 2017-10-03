import { Component, OnInit } from '@angular/core';

import { TransactionService } from '../../../../core/services'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './list.html'
})
export class ListComponent implements OnInit {
  protected loaded:boolean = false;
  protected transactions:Array<any> = [];

  public constructor(private transactionsService:TransactionService) { }

  public ngOnInit() {
    this.transactionsService.getList()
      .subscribe(
        (r) => {
          this.transactions = r;
          this.loaded = true;
        },
        (err) => console.log('err', err)
      )
  }
}
