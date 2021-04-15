import { AbstractControl, ValidatorFn } from '@angular/forms';

export class matchPassword {
    public static matchPassword(passwordName: string, confirmPasswordName: string): ValidatorFn {
        return (control: AbstractControl): null => {
            const password = control.get(passwordName).value; // to get value in input tag
            const confirmPassword = control.get(confirmPasswordName).value; // to get value in input tag
            if (password !== confirmPassword) {
                control.get(confirmPasswordName).setErrors({ matchPassword: true });
                return null;
            } else {
                return null;
            }
        };
    }
    public static validPassword(): ValidatorFn {
        return (control: AbstractControl): { validPassword: boolean } => {
            const passwordRegEx = RegExp('^(?=.*\\d)(?=.*[A-Z]).{6,30}$');

            if (!passwordRegEx.test(control.value)) {
                return {
                    validPassword: true
                };
            } else {
                return null;
            }
        };
    }
}
