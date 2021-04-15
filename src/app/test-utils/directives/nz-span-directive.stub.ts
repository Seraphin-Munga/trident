import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzSpan]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzSpanDirectiveStub {
    @Input()
    public nzSpan: string;
}
