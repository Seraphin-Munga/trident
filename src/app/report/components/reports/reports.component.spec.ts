import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsComponent } from './reports.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';

describe('ReportsComponent', () => {
    let component: ReportsComponent;
    let fixture: ComponentFixture<ReportsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ReportsComponent,
                NzFormLabelComponentStub,
                NzCardComponentStub,
                AppFormControlErrorComponentStub,
                NzSpanDirectiveStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzTypeDirectiveStub
            ],
            imports: [ReactiveFormsModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
