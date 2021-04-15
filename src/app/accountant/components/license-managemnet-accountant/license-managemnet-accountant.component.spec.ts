import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseManagemnetAccountantComponent } from './license-managemnet-accountant.component';

describe('LicenseManagemnetAccountantComponent', () => {
    let component: LicenseManagemnetAccountantComponent;
    let fixture: ComponentFixture<LicenseManagemnetAccountantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LicenseManagemnetAccountantComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LicenseManagemnetAccountantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
