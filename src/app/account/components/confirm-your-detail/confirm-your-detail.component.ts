import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../../../core/validators';
@Component({
    selector: 'app-confirm-your-detail',
    templateUrl: './confirm-your-detail.component.html',
    styleUrls: ['./confirm-your-detail.component.scss']
})
export class ConfirmYourDetailComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;

    public constructor(private readonly _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initializeForm();
    }

    public async confirm(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            this.saving = false;
        }
    }

    public initializeForm(): void {
        this.form = this._formBuilder.group(
            {
                name: ['', [Validators.required, Validators.maxLength(100)]],
                surname: ['', [Validators.required, Validators.maxLength(100)]],
                idNo: ['', [Validators.required, Validators.maxLength(13)]],
                grade: ['', [Validators.required, Validators.maxLength(100)]],
                password: [
                    '',
                    Validators.compose([
                        Validators.required,
                        matchPassword.validPassword,
                        Validators.minLength(6),
                        Validators.maxLength(30)
                    ])
                ],
                confirmationPassword: [
                    '',
                    Validators.compose([
                        Validators.required,
                        matchPassword.validPassword,
                        Validators.minLength(6),
                        Validators.maxLength(30)
                    ])
                ]
            },
            {
                validators: matchPassword.matchPassword('password', 'confirmationPassword')
            }
        );
    }
}
