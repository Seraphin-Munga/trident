import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppArrowBackComponentStub } from '../../../test-utils/components/app-arrow-back.component.stub';
import { AppUserManagementTeacherTableStub } from '../../../test-utils/components/app-user-management-teacher-table.stub';
import { UserManagementStudentsComponent } from './user-management-students.component';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';
import { RouterTestingModule } from '@angular/router/testing';
describe('UserManagementStudentsComponent', () => {
    let component: UserManagementStudentsComponent;
    let fixture: ComponentFixture<UserManagementStudentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                UserManagementStudentsComponent,
                AppArrowBackComponentStub,
                AppUserManagementTeacherTableStub,
                NzTypeDirectiveStub,
                AppRouterLinkDirectiveStub
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserManagementStudentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
