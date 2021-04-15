import { AbstractControl, ValidatorFn } from '@angular/forms';

export class validEmail {
    public static validEmail(): ValidatorFn {
        return (control: AbstractControl): { validEmail: boolean } => {
            const emailRegEx = RegExp('^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$');

            if (!emailRegEx.test(control.value)) {
                return {
                    validEmail: true
                };
            } else {
                return null;
            }
        };
    }
}
