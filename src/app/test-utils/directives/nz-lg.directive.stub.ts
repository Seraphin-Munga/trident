import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzLg]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzLgDirectiveStub {
    @Input()
    public nzLg: number;
}
