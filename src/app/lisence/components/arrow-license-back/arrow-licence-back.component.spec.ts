import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLisenceBackComponent } from './arrow-licence-back.component';

describe('ArrowLisenceBackComponent', () => {
    let component: ArrowLisenceBackComponent;
    let fixture: ComponentFixture<ArrowLisenceBackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArrowLisenceBackComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArrowLisenceBackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
