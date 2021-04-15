import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[nzFrontPagination]'
})

// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzFrontPaginationDirectiveStub {
    @Input()
    public nzFrontPagination: string;
}
