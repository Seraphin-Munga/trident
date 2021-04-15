import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountResourceService } from '../../../core/services/account-resource.service';
import { validEmail } from '../../../core/validators';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public _active: boolean;
    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _service: AccountResourceService
    ) {
        //
    }

    public ngOnInit(): void {
        //
        this.initializeForm();
    }

    public async next(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._service.forgotPassword(this.form.value);
        }
    }

    public initializeForm(): void {
        this.form = this._formBuilder.group({
            emailAddress: ['', [Validators.required, validEmail.validEmail]]
        });
    }
}
