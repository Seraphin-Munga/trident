import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzSpanDirectiveStub } from '../../../test-utils';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
describe('TermsAndConditionsComponent', () => {
    let component: TermsAndConditionsComponent;
    let fixture: ComponentFixture<TermsAndConditionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TermsAndConditionsComponent,
                NzLgDirectiveStub,
                NzXsDirectiveStub,
                NzCardComponentStub,
                NzSpanDirectiveStub,
                NzFormControlComponentStub,
                NzFormItemComponentStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TermsAndConditionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
