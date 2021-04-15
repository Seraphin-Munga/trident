import { Component, OnInit } from '@angular/core';
import { ISummaryReportRetrieval } from '../../../core/models/summary-report-retrieval.model';

@Component({
    selector: 'app-report-summary',
    templateUrl: './report-summary.component.html',
    styleUrls: ['./report-summary.component.scss']
})
export class ReportSummaryComponent implements OnInit {
    public summary: ReadonlyArray<ISummaryReportRetrieval> = [];

    public ngOnInit(): void {
        this.summary = new Array(3).fill(0).map(() => {
            return {
                title: 'Total to date',
                subTitle: 'Monetary Amount Earned',
                price: 'R000',
                total: '00'
            };
        });
    }
}
