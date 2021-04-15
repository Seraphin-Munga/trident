import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ConfirmYourDetailComponent } from './components/confirm-your-detail/confirm-your-detail.component';
import {LayoutModule}  from '../layout/layout.module';
import { HeaderBackgroudComponent } from './components/header-backgroud/header-backgroud.component'

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent, NewPasswordComponent, ConfirmYourDetailComponent, HeaderBackgroudComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NzFormModule,
        NzButtonModule,
        RouterModule,
        AccountRoutingModule,
        NzGridModule,
        NzCardModule,
        LayoutModule
    ]
})
export class AccountModule {}
