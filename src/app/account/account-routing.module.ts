import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { LoginComponent } from '../account/components/login/login.component';
import { ForgotPasswordComponent } from '../account/components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from '../account/components/new-password/new-password.component';
import { ConfirmYourDetailComponent } from './components/confirm-your-detail/confirm-your-detail.component';
const routes: Routes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'new-password', component: NewPasswordComponent },
            { path: 'confirm-detail', component: ConfirmYourDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
