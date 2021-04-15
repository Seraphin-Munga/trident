import { AbstractControl, ValidatorFn } from '@angular/forms';

export class validUsername {
    public static validUsername(): ValidatorFn {
        return (control: AbstractControl): { validUsername: boolean } => {
            const emailRegEx = RegExp('^[_.@A-Za-z0-9-]*$');

            if (!emailRegEx.test(control.value)) {
                return {
                    validUsername: true
                };
            } else {
                return null;
            }
        };
    }
}
