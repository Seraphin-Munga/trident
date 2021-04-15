import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserManagementTeacherTableComponent } from './user-management-teacher-table.component';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSelectionDirectiveStub } from '../../../test-utils/directives/nz-selection-directive.stub';
import { NzDataDirectiveStub } from '../../../test-utils/directives/nz.data.directive.stub';
import { NzInderminateDirectiveStub } from '../../../test-utils/directives/nz-indeterminate.directive.stub';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzCheckedDirectiveStub } from '../../../test-utils/directives/nz-checked.directive.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';

describe('UserManagementTeacherTableComponent', () => {
    let component: UserManagementTeacherTableComponent;
    let fixture: ComponentFixture<UserManagementTeacherTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                UserManagementTeacherTableComponent,
                NzTypeDirectiveStub,
                NzSelectionDirectiveStub,
                NzDataDirectiveStub,
                NzInderminateDirectiveStub,
                NzFormLabelComponentStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzCheckedDirectiveStub,
                NzCardComponentStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserManagementTeacherTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
