import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmYourDetailComponent } from './confirm-your-detail.component';

import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';

describe('ConfirmYourDetailComponent', () => {
    let component: ConfirmYourDetailComponent;
    let fixture: ComponentFixture<ConfirmYourDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ConfirmYourDetailComponent,
                NzXsDirectiveStub,
                NzLgDirectiveStub,
                NzCardComponentStub,
                AppFormControlErrorComponentStub,
                NzSpanDirectiveStub,
                NzTypeDirectiveStub,
                NzFormControlComponentStub,
                NzFormLabelComponentStub,
                NzFormItemComponentStub
            ],
            imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmYourDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
