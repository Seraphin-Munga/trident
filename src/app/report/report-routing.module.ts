import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from '../report/components/reports/reports.component';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [{ path: 'reports', component: ReportsComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule {}
