import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountResourceService } from './account-resource.service';
import { SessionStorageServiceStub } from '../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
describe('AccountResourceService', () => {
    let service: AccountResourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AccountResourceService,
                {
                    provide: SessionStorageService,
                    useClass: SessionStorageServiceStub
                },
                {
                    provide: LocalStorageService,
                    useClass: LocalStorageServiceStub
                }
            ],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(AccountResourceService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
