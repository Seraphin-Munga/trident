import { Component, Input, TemplateRef } from '@angular/core';

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: 'nz-input-group', template: '' })

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NzInputGroupComponentStub {
    @Input()
    public nzSuffix: string | TemplateRef<void>;
}
