import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountantRoutingModule } from './accountant-routing.module';
import { AccountantTableComponent } from './components/accountant-table/accountant-table.component';
import { UserManagementAccountantComponent } from './components/user-management-accountant/user-management-accountant.component';
import { SharedModule } from '../shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ArrowBackComponent } from './components/arrow-back/arrow-back.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { LicenseManagemnetAccountantComponent } from './components/license-managemnet-accountant/license-managemnet-accountant.component';

@NgModule({
    declarations: [
        AccountantTableComponent,
        UserManagementAccountantComponent,
        ArrowBackComponent,
        AddNewUserComponent,
        LicenseManagemnetAccountantComponent
    ],
    imports: [
        CommonModule,
        AccountantRoutingModule,
        NzGridModule,
        NzCardModule,
        NzFormModule,
        NzButtonModule,
        NzCheckboxModule,
        NzRadioModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NzTableModule,
        SharedModule
    ]
})
export class AccountantModule {}
