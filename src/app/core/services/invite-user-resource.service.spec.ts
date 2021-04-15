import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InviteUserResourceService } from './invite-user-resource.service';

describe('InviteUserResourceService', () => {
    let service: InviteUserResourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InviteUserResourceService],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(InviteUserResourceService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
