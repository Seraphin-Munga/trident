import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentResourceService } from './student-resource.service';

describe('StudentResourceService', () => {
    let service: StudentResourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StudentResourceService],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(StudentResourceService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
