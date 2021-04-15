import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzType]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzTypeDirectiveStub {
    @Input()
    public nzType: string;
}
