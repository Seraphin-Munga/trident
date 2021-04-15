import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzPercent]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzPercentDirectiveStub {
    @Input()
    public nzPercent: string;
}
