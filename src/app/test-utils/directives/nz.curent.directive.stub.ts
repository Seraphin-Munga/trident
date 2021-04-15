import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[current]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class CurrentDirectiveStub {
    @Input()
    public current: string;
}
