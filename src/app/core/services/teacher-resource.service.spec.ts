import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeacherResourceService } from './teacher-resource.service';

describe('TeacherResourceService', () => {
    let service: TeacherResourceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TeacherResourceService],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(TeacherResourceService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
