import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzCardComponentStub } from '../../../test-utils/components/nz-card.component.stub';
import { OrdersummaryComponent } from './order-summary.component';
import { SessionStorageServiceStub } from '../../../test-utils/services/session-storage.service.stub';
import { LocalStorageServiceStub } from '../../../test-utils/services/local-storage.service.stub';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';


describe('OrdersumaryComponent', () => {
    let component: OrdersummaryComponent;
    let fixture: ComponentFixture<OrdersummaryComponent>;

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
            declarations: [OrdersummaryComponent, NzCardComponentStub]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
