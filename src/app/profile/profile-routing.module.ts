import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLayoutComponent } from '../layout/search-layout/search-layout.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
    {
        path: '',
        component: SearchLayoutComponent,
        children: [{ path: 'user-profile', component: TabsComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
