import { TestBed } from '@angular/core/testing';
import { AuthenticationResourceService } from './authentication-resource.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SessionStorageServiceStub } from '../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../test-utils/services/local-storage.service.stub';

describe('AuthenticationResourceService', () => {
    let service: AuthenticationResourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthenticationResourceService,
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
        service = TestBed.inject(AuthenticationResourceService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
