import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nz-option',
    template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NzOptionComponentStub {
    @Input()
    public nzValue: string;
    @Input()
    public nzLabel: string;
}
