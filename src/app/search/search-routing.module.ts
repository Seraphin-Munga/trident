import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLayoutComponent } from '../layout/search-layout/search-layout.component';
import { SearchComponent } from '../search/components/search/search.component';

const routes: Routes = [
    {
        path: '',
        component: SearchLayoutComponent,
        children: [{ path: 'search', component: SearchComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {}
