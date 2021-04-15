import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppArrowBackComponentStub } from '../../../test-utils/components/app-arrow-back.component.stub';
import { AppRouterLinkDirectiveStub } from '../../../test-utils/directives/app-router-link.directive.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { UploadNewStudentComponent } from './upload-new-student.component';
import { NzProgressComponentStub } from '../../../test-utils/components/nz-progress.component.stub';
import { NzPercentDirectiveStub } from '../../../test-utils/directives/nz-percent.directive.stub';
describe('UploadNewStudentComponent', () => {
    let component: UploadNewStudentComponent;
    let fixture: ComponentFixture<UploadNewStudentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                UploadNewStudentComponent,
                AppArrowBackComponentStub,
                NzTypeDirectiveStub,
                AppRouterLinkDirectiveStub,
                NzProgressComponentStub,
                NzPercentDirectiveStub
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadNewStudentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
