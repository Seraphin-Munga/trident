import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-ordersummary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.scss']
})
export class OrdersummaryComponent implements OnInit {
    
    public price: number;

    public constructor(
        private readonly _sessionStorage: SessionStorageService
    ) {}

    public ngOnInit(): void {
       this.price = this._sessionStorage.retrieve("price");
    }
}
