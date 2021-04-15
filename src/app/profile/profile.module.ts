import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TabsComponent } from './components/tabs/tabs.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
    declarations: [ProfileComponent, TabsComponent, SubscriptionComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NzTabsModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzButtonModule,
        RouterModule,
        HttpClientTestingModule,
        SharedModule,
        NzGridModule,
        NzCardModule,
        NzSwitchModule,
        NzTableModule
    ]
})
export class ProfileModule {}
