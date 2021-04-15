import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public constructor(private readonly _iconService: NzIconService) {
        this._iconService.fetchFromIconfont({
            scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
        });
    }
}
