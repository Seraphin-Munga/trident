import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzFormLabelComponentStub } from '../../../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../../../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../../../test-utils/components/nz-form-control.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { AppFormControlErrorComponentStub } from '../../../test-utils/components/app-form-control-error.component.stub';
import { TeacherRegisterOnPlatformComponent } from './teacher-register-on-platform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
describe('TeacherRegisterOnPlatformComponent', () => {
    let component: TeacherRegisterOnPlatformComponent;
    let fixture: ComponentFixture<TeacherRegisterOnPlatformComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TeacherRegisterOnPlatformComponent,
                NzFormLabelComponentStub,
                NzFormItemComponentStub,
                NzFormControlComponentStub,
                NzTypeDirectiveStub,
                AppFormControlErrorComponentStub,
                NzXsDirectiveStub,
                NzLgDirectiveStub,
                NzCardComponentStub
            ],
            imports: [ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherRegisterOnPlatformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
