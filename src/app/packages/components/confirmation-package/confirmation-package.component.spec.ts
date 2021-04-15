import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStepsComponent } from '../../../test-utils/components/app-steps.component.stub';
import { CurrentDirectiveStub } from '../../../test-utils/directives/nz.curent.directive.stub';
import { ConfirmationPackageComponent } from './confirmation-package.component';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';

describe('ConfirmationPackageComponent', () => {
    let component: ConfirmationPackageComponent;
    let fixture: ComponentFixture<ConfirmationPackageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ConfirmationPackageComponent,
                NzXsDirectiveStub,
                NzLgDirectiveStub,
                NzCardComponentStub,
                AppFormControlErrorComponentStub,
                NzSpanDirectiveStub,
                NzTypeDirectiveStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzFormLabelComponentStub,
                AppStepsComponent,
                CurrentDirectiveStub
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmationPackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
