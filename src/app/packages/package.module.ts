import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from '../packages/components/terms-and-conditions/terms-and-conditions.component';
import { ConfirmationPackageComponent } from './components/confirmation-package/confirmation-package.component';
import { SelectPackagesComponent } from './components/select-packages/select-packages.component';
import { OrdersummaryComponent } from './components/order-summary/order-summary.component';
import { InstitutionInformationComponent } from './components/institution-information/institution-information.component';
import { PackagePaymentInformationComponent } from './components/package-payment-information/package-payment-information.component';
import { StepsComponent } from '../packages/components/steps/steps.component';
import { PackageRoutingModule } from '../packages/package-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
    declarations: [
        TermsAndConditionsComponent,
        ConfirmationPackageComponent,
        SelectPackagesComponent,
        OrdersummaryComponent,
        InstitutionInformationComponent,
        PackagePaymentInformationComponent,
        StepsComponent
    ],

    imports: [
        CommonModule,
        NzStepsModule,
        NzFormModule,
        FormsModule,
        ReactiveFormsModule,
        NzRadioModule,
        NzCheckboxModule,
        NzButtonModule,
        NzTableModule,
        RouterModule,
        PackageRoutingModule,
        SharedModule,
        NzCardModule
    ]
})
export class PackageModule {}
