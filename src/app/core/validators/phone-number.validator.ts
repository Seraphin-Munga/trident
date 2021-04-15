import { AbstractControl, ValidatorFn } from '@angular/forms';

export class validPhoneNumber {
    public static validPhoneNumber(): ValidatorFn {
        return (control: AbstractControl): { validPhoneNumber: boolean } => {
            const phoneNumberRegEx = RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');

            if (!phoneNumberRegEx.test(control.value)) {
                return {
                    validPhoneNumber: true
                };
            } else {
                return null;
            }
        };
    }
}
