import { Component, OnInit } from '@angular/core';
import { AccountRetrievalModel } from '../../../app/core/models/account-retrieval.model';
import { RoleModel } from '../../../app/core/models/role.model';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
    public userRoleEnum: AccountRetrievalModel;
    public Role = RoleModel;
    public fullName: string;
    public userType: string;

    public ngOnInit(): void {
        this.fullName = 'Full Name';
        this.userType = 'User Type';
    }
}
