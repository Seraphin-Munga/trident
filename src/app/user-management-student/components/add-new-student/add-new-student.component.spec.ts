import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';
import { AddNewStudentComponent } from './add-new-student.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppArrowBackComponentStub } from '../../../test-utils/components/app-arrow-back.component.stub';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';

describe('AddNewStudentComponent', () => {
    let component: AddNewStudentComponent;
    let fixture: ComponentFixture<AddNewStudentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AddNewStudentComponent,
                NzSpanDirectiveStub,
                NzTypeDirectiveStub,
                NzFormControlComponentStub,
                NzFormItemComponentStub,
                NzFormLabelComponentStub,
                AppArrowBackComponentStub,
                AppFormControlErrorComponentStub,
                AppRouterLinkDirectiveStub,
                NzXsDirectiveStub,
                NzLgDirectiveStub,
                NzCardComponentStub
            ],
            imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewStudentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
