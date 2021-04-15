import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzHeaderComponentStub } from '../../../test-utils/components/nz-header.component.stub';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent, NzHeaderComponentStub],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
