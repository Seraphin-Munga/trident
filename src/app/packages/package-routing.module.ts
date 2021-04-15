import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { SelectPackagesComponent } from '../packages/components/select-packages/select-packages.component';
import { InstitutionInformationComponent } from '../packages/components/institution-information/institution-information.component';
import { TermsAndConditionsComponent } from '../packages/components/terms-and-conditions/terms-and-conditions.component';
import { ConfirmationPackageComponent } from '../packages/components/confirmation-package/confirmation-package.component';
import { PackagePaymentInformationComponent } from '../packages/components/package-payment-information/package-payment-information.component';

const routes: Routes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: 'select-packages', component: SelectPackagesComponent },
            { path: 'institution-information', component: InstitutionInformationComponent },
            { path: 'confirmation-package', component: ConfirmationPackageComponent },
            { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
            { path: 'package-payment-information', component: PackagePaymentInformationComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackageRoutingModule {}
