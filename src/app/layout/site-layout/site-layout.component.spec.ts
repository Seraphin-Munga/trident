import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteLayoutComponent } from './site-layout.component';
import { NzContentComponentStub } from '../../test-utils/components/nz-content.component.stub';
import { NzHeaderComponentStub } from '../../test-utils/components/nz-header.component.stub';
import { NzLayoutComponentStub } from '../../test-utils/components/nz-layout.component.stub';
import { AppFooterComponent } from '../../test-utils/components/app-footer.component.stub';
import { AppHeaderComponent } from '../../test-utils/components/app-header.component.stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('SiteLayoutComponent', () => {
    let component: SiteLayoutComponent;
    let fixture: ComponentFixture<SiteLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                SiteLayoutComponent,
                NzContentComponentStub,
                NzHeaderComponentStub,
                NzLayoutComponentStub,
                AppFooterComponent,
                AppHeaderComponent
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiteLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
