import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { NzContentComponentStub } from '../../test-utils/components/nz-content.component.stub';
import { NzHeaderComponentStub } from '../../test-utils/components/nz-header.component.stub';
import { NzLayoutComponentStub } from '../../test-utils/components/nz-layout.component.stub';
import { AppFooterComponent } from '../../test-utils/components/app-footer.component.stub';
import { AppHeaderComponent } from '../../test-utils/components/app-header.component.stub';
import { NzSiderpComponent } from '../../test-utils/components/nz-sider-component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageServiceStub } from '../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { HasAnyAuthorityDirective } from '../../shared/directives/has-any-authority.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('DashboardLayoutComponent', () => {
    let component: DashboardLayoutComponent;
    let fixture: ComponentFixture<DashboardLayoutComponent>;

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
                DashboardLayoutComponent,
                NzContentComponentStub,
                NzHeaderComponentStub,
                NzSiderpComponent,
                NzLayoutComponentStub,
                AppFooterComponent,
                AppHeaderComponent,
                HasAnyAuthorityDirective
            ],
            imports: [RouterTestingModule, HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
