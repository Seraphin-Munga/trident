import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPackagesComponent } from './select-packages.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStepsComponent } from '../../../test-utils/components/app-steps.component.stub';
import { NzTableComponentStub } from '../../../test-utils/components/nz-table.component.stub';
import { CurrentDirectiveStub } from '../../../test-utils/directives/nz.curent.directive.stub';
import { NzDataDirectiveStub } from '../../../test-utils/directives/nz.data.directive.stub';
import { NzFrontPaginationDirectiveStub } from '../../../test-utils/directives/nz.front.pagination.stub';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { NzLgDirectiveStub } from '../../../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../../../test-utils/directives/nz-xs.directive.stub';
import { SessionStorageServiceStub } from '../../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

describe('SelectPackagesComponent', () => {
    let component: SelectPackagesComponent;
    let fixture: ComponentFixture<SelectPackagesComponent>;

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
                SelectPackagesComponent,
                NzFrontPaginationDirectiveStub,
                NzDataDirectiveStub,
                CurrentDirectiveStub,
                AppStepsComponent,
                NzCardComponentStub,
                NzTableComponentStub,
                NzLgDirectiveStub,
                NzXsDirectiveStub
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectPackagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
