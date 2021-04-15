/* eslint-disable @angular-eslint/no-forward-ref */
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nz-radio-group',
    template: '',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: forwardRef(() => NzRadioGroupComponent),
            multi: true
        }
    ]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NzRadioGroupComponent implements ControlValueAccessor {
    @Input()
    public nzPlaceHolder: string;
    @Input()
    public nzSize: string;

    // tslint:disable-next-line:no-empty no-any
    public writeValue(): void {
        //
    }

    // tslint:disable-next-line:no-any no-empty
    public registerOnChange(): void {
        //
    }

    // tslint:disable-next-line:no-any
    public registerOnTouched(): void {
        // console.log('on touch: ', fn);
    }
}
