import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportsComponent } from '../report/components/reports/reports.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ArrowBackComponent } from './arrow-back/arrow-back.component';
import { ReportSummaryComponent } from './components/report-summary/report-summary.component';

@NgModule({
    declarations: [ReportsComponent, ReportTableComponent, ArrowBackComponent, ReportSummaryComponent],
    imports: [
        CommonModule,
        ReportRoutingModule,
        NzTableModule,
        FormsModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzCheckboxModule,
        NzRadioModule,
        RouterModule,
        NzFormModule,
        NzCardModule,
        NzGridModule,
        SharedModule
    ]
})
export class ReportModule {}
