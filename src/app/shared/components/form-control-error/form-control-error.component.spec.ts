import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlErrorComponent } from './form-control-error.component';
import { NzFormExplainComponentStub } from '../../../test-utils/components/nz-form-explain.component.stub';

describe('FormControlErrorComponent', () => {
    let component: FormControlErrorComponent;
    let fixture: ComponentFixture<FormControlErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormControlErrorComponent, NzFormExplainComponentStub]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormControlErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
