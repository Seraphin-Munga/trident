import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingUserViewComponent } from './landing-user-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';

describe('LandingUserViewComponent', () => {
    let component: LandingUserViewComponent;
    let fixture: ComponentFixture<LandingUserViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LandingUserViewComponent, NzXsDirectiveStub, NzCardComponentStub, NzLgDirectiveStub],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingUserViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
