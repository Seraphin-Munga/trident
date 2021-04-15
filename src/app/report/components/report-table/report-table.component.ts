import { Component, OnInit } from '@angular/core';
import { IReportRetrivalModel } from '../../../../app/core/models/institution-retrieval.model';

@Component({
    selector: 'app-report-table',
    templateUrl: './report-table.component.html',
    styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
    public checked = false;
    public indeterminate = false;
    public listOfCurrentPageData: ReadonlyArray<IReportRetrivalModel> = [];
    public listOfData: ReadonlyArray<IReportRetrivalModel> = [];
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
        this.listOfData = new Array(5).fill(0).map((_, index) => {
            return {
                id: index,
                nameOfInstitution: 'Name of institution',
                regNo: '#12334',
                institutionType: 'institution Type',
                noOfLicenses: '500>',
                startDate: 'DD-MM-YYYY',
                endDate: 'DD-MM-YYYY'
            };
        });
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

    public onCurrentPageDataChange($event: ReadonlyArray<IReportRetrivalModel>): void {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }

    public refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
        this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
}
