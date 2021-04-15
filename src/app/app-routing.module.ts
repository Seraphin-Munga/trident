import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'account', loadChildren: async () => import('../app/account/account.module').then(m => m.AccountModule) },
    { path: 'package', loadChildren: async () => import('../app/packages/package.module').then(m => m.PackageModule) },
    { path: 'dashboard', loadChildren: async () => import('../app/user-management/user.module').then(m => m.UserModule) },
    { path: 'report', loadChildren: async () => import('../app/report/report.module').then(m => m.ReportModule) },
    { path: 'search', loadChildren: async () => import('../app/search/search.module').then(m => m.SearchModule) },
    { path: 'accountant', loadChildren: async () => import('../app/accountant/accountant.module').then(m => m.AccountantModule) },
    { path: 'profile', loadChildren: async () => import('../app/profile/profile.module').then(m => m.ProfileModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
