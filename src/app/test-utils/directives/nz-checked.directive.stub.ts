import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzChecked]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzCheckedDirectiveStub {
    @Input()
    public nzChecked: string;
}
