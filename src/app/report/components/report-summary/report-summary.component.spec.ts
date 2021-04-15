import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportSummaryComponent } from './report-summary.component';
import { AppReportSummaryComponentStub } from '../../../test-utils/components/app-report-summary.component.stub';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';

describe('ReportSummaryComponent', () => {
    let component: ReportSummaryComponent;
    let fixture: ComponentFixture<ReportSummaryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ReportSummaryComponent,
                NzFormItemComponentStub,
                NzSpanDirectiveStub,
                NzTypeDirectiveStub,
                NzFormControlComponentStub,
                AppReportSummaryComponentStub,
                NzFormLabelComponentStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
