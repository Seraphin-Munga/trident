import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherResourceService } from '../../../core/services/teacher-resource.service';
import { validEmail } from '../../../core/validators';

@Component({
    selector: 'app-teacher-profile',
    templateUrl: './teacher-profile.component.html',
    styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public constructor(private readonly _formBuilder: FormBuilder, private readonly _service: TeacherResourceService) {
        //
    }

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public async submit(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._service.teacherCreation(this.form.value);
        } else {
            //
        }
    }

    public download(): void {
        ///
    }

    public addNewStudent(): void {
        //
    }

    public deactivateAccount(): void {
        //
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            identityNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            grade: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            emailAddress: ['', [Validators.required, validEmail.validEmail]]
        });
        this.saving = false;
    }
}
