import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzSelections]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzSelectionDirectiveStub {
    @Input()
    public nzSelections: string;
}
