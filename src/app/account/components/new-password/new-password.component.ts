import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPassword } from '../../../core/validators';
import { AccountResourceService } from '../../../core/services/account-resource.service';
@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public _active: boolean;
    public confirmPasswordVisible: boolean;
    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _service: AccountResourceService
    ) {
        //
    }

    public ngOnInit(): void {
        this.initializeForm();
    }

    public async submit(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._service.newPassword(this.form.value);
        } else {
            ///
        }
    }

    public initializeForm(): void {
        this.form = this._formBuilder.group({
            password: ['', [Validators.required, matchPassword.validPassword]],
            retypeNewPassword: ['', [Validators.required, matchPassword.validPassword]]
        });
    }
}
