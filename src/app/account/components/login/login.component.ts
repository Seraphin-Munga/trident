import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validEmail } from '../../../core/validators';
import { IAuthenticationModel } from '../../../core/models/authentication.model';
import { RoleModel } from '../../../core/models/role.model';
import { AuthenticationResourceService } from '../../../core/services/authentication-resource.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public _active: boolean;

    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _loginService: AuthenticationResourceService
    ) {}
    public ngOnInit(): void {
        this.initializeForm();
    }

    public async login(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            const credentials: IAuthenticationModel = {
                emailAddress: this.form.value.emailAddress,
                password: this.form.value.password
            };
            const account = await this._loginService.login(credentials);
            this.saving = false;
            switch (account.role) {
                case RoleModel.ADMIN:
                    await this._router.navigate(['/dashboard/landing-view']);
                    break;
                case RoleModel.ACCOUNTANT:
                    await this._router.navigate(['/accountant/user-management-accountant']);
                    break;
            }
        }
    }
    public initializeForm(): void {
        this.form = this._formBuilder.group({
            emailAddress: ['', [Validators.required, validEmail.validEmail, Validators.minLength(1), Validators.maxLength(100)]],
            password: ['', [Validators.required]]
        });
    }
}
