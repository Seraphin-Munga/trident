import { Component, OnInit } from '@angular/core';
import { validEmail } from '../../../core/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public constructor(private readonly _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public async save(): Promise<void> {
        this.saving = true;
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            identityNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            emailAddress: ['', [Validators.required, validEmail.validEmail]]
        });
        this.saving = false;
    }
}
