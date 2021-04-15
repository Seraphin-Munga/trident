import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-arrow-back',
    templateUrl: './arrow-back.component.html',
    styleUrls: ['./arrow-back.component.scss']
})
export class ArrowBackComponent {
    @Input() public title: string;
    @Input() public routerLink: string;
}
