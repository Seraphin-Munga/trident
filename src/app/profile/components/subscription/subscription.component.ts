import { Component, OnInit } from '@angular/core';
import { IBillingRetrivalModel } from '../../../../app/core/models/billing-retrieval.model';
import { Router } from '@angular/router';
@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
    public checked = false;
    public indeterminate = false;
    public listOfData = [];
    public listOfCurrentPageData: ReadonlyArray<IBillingRetrivalModel> = [];
    public dataModel: IBillingRetrivalModel;
    public setOfCheckedId = new Set<number>();

    public listOfSelection = [
        {
            text: 'Select All Row',
            onSelect(): void {
                this.onAllChecked(true);
            }
        },
        {
            text: 'Select Odd Row',
            onSelect(): void {
                this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
                this.refreshCheckedStatus();
            }
        },
        {
            text: 'Select Even Row',
            onSelect(): void {
                this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
                this.refreshCheckedStatus();
            }
        }
    ];

    public constructor(private readonly _router: Router) {}

    public async renew(): Promise<void> {
        await this._router.navigate(['']);
    }
    public async view(): Promise<void> {
        await this._router.navigate(['']);
    }
    public async manage(): Promise<void> {
        await this._router.navigate(['']);
    }

    public ngOnInit(): void {
        this.dataModel = {
            id: 1,
            type: 'Invoice',
            date: 'Jul,22,2020',
            amount: 'R0.00'
        };
        this.listOfData.push(this.dataModel);
    }

    public updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    public onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    public onAllChecked(value: boolean): void {
        this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
        this.refreshCheckedStatus();
    }

    public onCurrentPageDataChange($event: ReadonlyArray<IBillingRetrivalModel>): void {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }

    public refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
        this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
}
