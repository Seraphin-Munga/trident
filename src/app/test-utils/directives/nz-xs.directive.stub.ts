import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzXs]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzXsDirectiveStub {
    @Input()
    public nzXs: number;
}
