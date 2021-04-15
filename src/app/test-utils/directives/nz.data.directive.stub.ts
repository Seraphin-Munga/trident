import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzData]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzDataDirectiveStub {
    @Input()
    public nzData: string;
}
