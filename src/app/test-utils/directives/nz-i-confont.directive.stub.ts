import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzIconfont]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzIConfontDirectiveStub {
    @Input()
    public nzIconfont: string;
}
