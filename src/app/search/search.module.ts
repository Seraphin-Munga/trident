import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SearchRoutingModule, NzGridModule, NzCardModule]
})
export class SearchModule {}
