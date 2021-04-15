import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzSpanDirectiveStub } from '../../../test-utils/directives/nz-span-directive.stub';
import { NewPasswordComponent } from './new-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
import { SessionStorageServiceStub } from '../../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

describe('NewPasswordComponent', () => {
    let component: NewPasswordComponent;
    let fixture: ComponentFixture<NewPasswordComponent>;

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
                NewPasswordComponent,
                NzSpanDirectiveStub,
                NzTypeDirectiveStub,
                NzFormControlComponentStub,
                NzFormItemComponentStub,
                NzFormLabelComponentStub,
                NzCardComponentStub,
                AppFormControlErrorComponentStub,
                NzLgDirectiveStub,
                NzXsDirectiveStub
            ],
            imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
