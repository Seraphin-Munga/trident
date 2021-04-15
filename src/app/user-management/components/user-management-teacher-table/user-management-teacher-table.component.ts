import { Component, OnInit, Input } from '@angular/core';
import { ITeacherRetrivalModel } from '../../../core/models/teacher-retrieval.model';

@Component({
    selector: 'app-user-management-teacher-table',
    templateUrl: './user-management-teacher-table.component.html',
    styleUrls: ['./user-management-teacher-table.component.scss']
})
export class UserManagementTeacherTableComponent implements OnInit {
    @Input()
    public btnView: string;

    public checked = false;
    public indeterminate = false;
    public listOfCurrentPageData: ReadonlyArray<ITeacherRetrivalModel> = [];
    public listOfData: ReadonlyArray<ITeacherRetrivalModel> = [];
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
        this.listOfData = new Array(10).fill(0).map((_, index) => {
            return {
                id: index,
                licences: '#01',
                idNo: 12336545626946,
                fullName: 'Name & Surname',
                grade: 32,
                emailAddress: 'Email Address'
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

    public onCurrentPageDataChange($event: ReadonlyArray<ITeacherRetrivalModel>): void {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }

    public refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
        this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
}
