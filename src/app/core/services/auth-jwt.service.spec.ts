import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthJwtService } from './auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SessionStorageServiceStub } from '../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../test-utils/services/local-storage.service.stub';

describe('AuthJwtService', () => {
    let service: AuthJwtService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthJwtService,
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
        service = TestBed.inject(AuthJwtService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
