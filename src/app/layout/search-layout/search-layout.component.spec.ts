import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzContentComponentStub } from '../../test-utils/components/nz-content.component.stub';
import { NzHeaderComponentStub } from '../../test-utils/components/nz-header.component.stub';
import { NzLayoutComponentStub } from '../../test-utils/components/nz-layout.component.stub';
import { AppFooterComponent } from '../../test-utils/components/app-footer.component.stub';
import { AppHeaderComponent } from '../../test-utils/components/app-header.component.stub';
import { NzSiderpComponent } from '../../test-utils/components/nz-sider-component.stub';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchLayoutComponent } from './search-layout.component';

describe('SearchLayoutComponent', () => {
    let component: SearchLayoutComponent;
    let fixture: ComponentFixture<SearchLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                SearchLayoutComponent,
                NzSiderpComponent,
                AppHeaderComponent,
                AppFooterComponent,
                NzLayoutComponentStub,
                NzHeaderComponentStub,
                NzContentComponentStub
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
