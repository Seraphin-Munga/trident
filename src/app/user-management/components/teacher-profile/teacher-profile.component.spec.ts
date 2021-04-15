import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherProfileComponent } from './teacher-profile.component';
import { NzDataDirectiveStub } from '../../../test-utils/directives/nz.data.directive.stub';
import { NzInderminateDirectiveStub } from '../../../test-utils/directives/nz-indeterminate.directive.stub';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { AppUserManagementTeacherTableStub } from '../../../test-utils/components/app-user-management-teacher-table.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';
import { AppArrowBackComponentStub } from '../../../test-utils/components/app-arrow-back.component.stub';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
describe('TeacherProfileComponent', () => {
    let component: TeacherProfileComponent;
    let fixture: ComponentFixture<TeacherProfileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TeacherProfileComponent,
                NzDataDirectiveStub,
                NzInderminateDirectiveStub,
                NzFormLabelComponentStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                AppUserManagementTeacherTableStub,
                NzTypeDirectiveStub,
                AppRouterLinkDirectiveStub,
                AppArrowBackComponentStub,
                AppFormControlErrorComponentStub,
                NzCardComponentStub,
                NzLgDirectiveStub,
                NzXsDirectiveStub
            ],
            imports: [ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
