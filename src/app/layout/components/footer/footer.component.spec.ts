import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { NzFooterComponentStub } from '../../../test-utils/components/nz-footer.component.stub';
import { NzTypeDirectiveStub } from '../../../test-utils/directives/nz-type.directive.stub';
import { NzIConfontDirectiveStub } from '../../../test-utils/directives/nz-i-confont.directive.stub';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent, NzFooterComponentStub, NzTypeDirectiveStub, NzIConfontDirectiveStub],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
