import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';

import { ArrowBackComponent } from './arrow-back.component';

describe('ArrowBackComponent', () => {
    let component: ArrowBackComponent;
    let fixture: ComponentFixture<ArrowBackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArrowBackComponent, AppRouterLinkDirectiveStub]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArrowBackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
