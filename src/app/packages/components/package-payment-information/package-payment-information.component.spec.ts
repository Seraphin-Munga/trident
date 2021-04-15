import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStepsComponent } from '../../../test-utils/components/app-steps.component.stub';
import { PackagePaymentInformationComponent } from './package-payment-information.component';
import { AppOrderSummaryComponent } from '../../../test-utils/components/app-ordersummary.component.stub';
import { CurrentDirectiveStub } from '../../../test-utils/directives/nz.curent.directive.stub';
import { SessionStorageServiceStub } from '../../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';

import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';

describe('PackagePaymentInformationComponent', () => {
    let component: PackagePaymentInformationComponent;
    let fixture: ComponentFixture<PackagePaymentInformationComponent>;

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
                PackagePaymentInformationComponent,
                NzSpanDirectiveStub,
                CurrentDirectiveStub,
                AppStepsComponent,
                AppOrderSummaryComponent,
                NzFormLabelComponentStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackagePaymentInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
