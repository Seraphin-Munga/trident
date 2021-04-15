import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/components/header/header.component';
import { FooterComponent } from '../layout/components/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SearchLayoutComponent } from './search-layout/search-layout.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
    declarations: [HeaderComponent, FooterComponent, SiteLayoutComponent, DashboardLayoutComponent, SearchLayoutComponent],
    imports: [CommonModule, NzLayoutModule, NzIconModule, RouterModule, NzGridModule],
    exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {}
