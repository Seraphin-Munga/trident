import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzCurrent]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzCurrentDirectiveStub {
    @Input()
    public nzCurrent: string;
}
