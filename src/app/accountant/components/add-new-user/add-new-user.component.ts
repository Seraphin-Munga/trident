import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validEmail } from '../../../core/validators';

@Component({
    selector: 'app-add-new-user',
    templateUrl: './add-new-user.component.html',
    styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public constructor(private readonly _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public async submit(): Promise<void> {
        this.saving = true;
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            role: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            surName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            emailAddress: ['', [Validators.required, validEmail.validEmail]]
        });
        this.saving = false;
    }
}
