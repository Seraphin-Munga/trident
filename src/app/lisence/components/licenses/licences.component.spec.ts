import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicensesComponent } from './licences.component';
import { AppArrowLisenceBackComponentStub } from '../../../test-utils/components/app-arrow-lisence-back.component.stub';
import { AppUserManagementTeacherTableStub } from '../../../test-utils/components/app-user-management-teacher-table.stub';

describe('LicensesComponent', () => {
    let component: LicensesComponent;
    let fixture: ComponentFixture<LicensesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LicensesComponent, AppArrowLisenceBackComponentStub, AppUserManagementTeacherTableStub]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
