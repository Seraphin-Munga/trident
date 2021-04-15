import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewUserComponent } from './add-new-user.component';

describe('AddNewUserComponent', () => {
    let component: AddNewUserComponent;
    let fixture: ComponentFixture<AddNewUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddNewUserComponent],
            imports: [ReactiveFormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
