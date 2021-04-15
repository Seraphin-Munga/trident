import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAccountantComponent } from './user-management-accountant.component';

describe('UserManagementAccountantComponent', () => {
    let component: UserManagementAccountantComponent;
    let fixture: ComponentFixture<UserManagementAccountantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserManagementAccountantComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserManagementAccountantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
