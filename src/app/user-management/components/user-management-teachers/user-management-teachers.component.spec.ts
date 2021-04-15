import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { UserManagementTeachersComponent } from './user-management-teachers.component';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { AppUserManagementTeacherTableStub } from '../../../test-utils/components/app-user-management-teacher-table.stub';
import { AppArrowBackComponentStub } from '../../../test-utils/components/app-arrow-back.component.stub';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';

describe('UserManagementTeachersComponent', () => {
    let component: UserManagementTeachersComponent;
    let fixture: ComponentFixture<UserManagementTeachersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                UserManagementTeachersComponent,
                NzFormLabelComponentStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzTypeDirectiveStub,
                AppUserManagementTeacherTableStub,
                AppArrowBackComponentStub,
                AppRouterLinkDirectiveStub,
                AppFormControlErrorComponentStub
            ],
            imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserManagementTeachersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
