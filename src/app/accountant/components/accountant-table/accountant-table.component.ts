import { Component, OnInit } from '@angular/core';
import { IAccountantRetrievalModel } from '../../../core/models/accountant-retrieval.model';

@Component({
    selector: 'app-accountant-table',
    templateUrl: './accountant-table.component.html',
    styleUrls: ['./accountant-table.component.scss']
})
export class AccountantTableComponent implements OnInit {
    public checked = false;
    public indeterminate = false;
    public dataModel: IAccountantRetrievalModel;
    public listOfCurrentPageData: ReadonlyArray<IAccountantRetrievalModel> = [];
    public listOfData = [];
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

    public filter(): void {
        ///
    }

    public ngOnInit(): void {
        this.dataModel = {
            id: 1,
            fullName: 'Full Name',
            emailAddress: 'Email Address',
            role: 'Accountant',
            status: 'Active'
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

    public onCurrentPageDataChange($event: ReadonlyArray<IAccountantRetrievalModel>): void {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }

    public refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
        this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
}
