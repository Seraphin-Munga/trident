import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstitutionInformationComponent } from './institution-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { AppStepsComponent } from '../../../test-utils/components/app-steps.component.stub';
import { AppOrderSummaryComponent } from '../../../test-utils/components/app-ordersummary.component.stub';
import { NzRadioGroupComponent } from '../../../test-utils/components/nz-radio-group.component.stub';
import { CurrentDirectiveStub } from '../../../test-utils/directives/nz.curent.directive.stub';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { SessionStorageServiceStub } from '../../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
describe('InstitutionInformationComponent', () => {
    let component: InstitutionInformationComponent;
    let fixture: ComponentFixture<InstitutionInformationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: SessionStorageService,
                    useClass: SessionStorageServiceStub
                },
                {
                    provide: LocalStorageService,
                    useClass: LocalStorageServiceStub
                }
            ],
            declarations: [
                InstitutionInformationComponent,
                NzFormLabelComponentStub,
                AppOrderSummaryComponent,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzRadioGroupComponent,
                AppStepsComponent,
                NzCardComponentStub,
                CurrentDirectiveStub,
                AppFormControlErrorComponentStub
            ],
            imports: [ReactiveFormsModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InstitutionInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
