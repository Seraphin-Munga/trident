import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubscriptionComponent } from './subscription.component';

describe('SubscriptionComponent', () => {
    let component: SubscriptionComponent;
    let fixture: ComponentFixture<SubscriptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubscriptionComponent],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubscriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
