import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzContentComponentStub } from '../app/test-utils/components/nz-content.component.stub';
import { NzHeaderComponentStub } from '../app/test-utils/components/nz-header.component.stub';
import { NzLayoutComponentStub } from '../app/test-utils/components/nz-layout.component.stub';
import { AppFooterComponent } from '../app/test-utils/components/app-footer.component.stub';
import { AppHeaderComponent } from '../app/test-utils/components/app-header.component.stub';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent,
                NzHeaderComponentStub,
                NzContentComponentStub,
                NzLayoutComponentStub,
                AppFooterComponent,
                AppHeaderComponent
            ]
        }).compileComponents();
    });

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        await expect(app).toBeTruthy();
    });

    it('should render title', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        await expect(compiled.querySelector('.content span').textContent).toContain('trident app is running!');
    });
});
