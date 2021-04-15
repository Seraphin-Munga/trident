import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { UserManagementAccountantComponent } from './components/user-management-accountant/user-management-accountant.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { LicenseManagemnetAccountantComponent } from './components/license-managemnet-accountant/license-managemnet-accountant.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            { path: 'user-management-accountant', component: UserManagementAccountantComponent },
            { path: 'add-new-user', component: AddNewUserComponent },
            { path: 'license-management-accountant', component: LicenseManagemnetAccountantComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountantRoutingModule {}
