import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportTableComponent } from './report-table.component';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSelectionDirectiveStub } from '../../../test-utils/directives/nz-selection-directive.stub';
import { NzDataDirectiveStub } from '../../../test-utils/directives/nz.data.directive.stub';
import { NzInderminateDirectiveStub } from '../../../test-utils/directives/nz-indeterminate.directive.stub';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzCheckedDirectiveStub } from '../../../test-utils/directives/nz-checked.directive.stub';
import { AppReportTableStub } from '../../../test-utils/components/app-report-table.component.stub';

describe('ReportTableComponent', () => {
    let component: ReportTableComponent;
    let fixture: ComponentFixture<ReportTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ReportTableComponent,
                NzTypeDirectiveStub,
                AppReportTableStub,
                NzCheckedDirectiveStub,
                NzFormControlComponentStub,
                NzFormItemComponentStub,
                NzFormLabelComponentStub,
                NzSelectionDirectiveStub,
                NzDataDirectiveStub,
                NzInderminateDirectiveStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
