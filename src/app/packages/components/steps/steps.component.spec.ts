import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzStepsComponent } from '../../../test-utils/components/nz-steps.component.stub';
import { StepsComponent } from './steps.component';
import { NzStepComponent } from '../../../test-utils/components/nz-step.component.stub';
import { NzCurrentDirectiveStub } from '../../../test-utils/directives/nz.current.directive.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';

describe('StepsComponent', () => {
    let component: StepsComponent;
    let fixture: ComponentFixture<StepsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                StepsComponent,
                NzStepsComponent,
                NzCardComponentStub,
                NzLgDirectiveStub,
                NzXsDirectiveStub,
                NzStepComponent,
                NzCurrentDirectiveStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StepsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
