import { Component, Input, TemplateRef } from '@angular/core';

// eslint-disable-next-line @angular-eslint/component-selector
@Component({ selector: 'nz-list-item', template: '' })
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NzListItemComponentStub {
    @Input()
    public nzContent: string | TemplateRef<void>;
}
