import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzIndeterminate]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzInderminateDirectiveStub {
    @Input()
    public nzIndeterminate: string;
}
