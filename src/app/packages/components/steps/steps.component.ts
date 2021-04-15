/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss']
})
export class StepsComponent {
    @Input()
    public current: number;
    @Input()
    public backgroundImage: string;
}
