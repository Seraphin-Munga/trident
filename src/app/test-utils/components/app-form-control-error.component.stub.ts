import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({ selector: 'app-form-control-error', template: '' })

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class AppFormControlErrorComponentStub {
    @Input()
    public control: AbstractControl;
    @Input()
    public label: string;
    @Input()
    public submitting: boolean;
}
