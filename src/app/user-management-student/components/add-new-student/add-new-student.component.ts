import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentResourceService } from '../../../core/services/student-resource.service';
import { validEmail } from '../../../core/validators';

@Component({
    selector: 'app-add-new-student',
    templateUrl: './add-new-student.component.html',
    styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public _active: boolean;
    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _service: StudentResourceService
    ) {
        //
    }

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public async submit(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._service.create(this.form.value);
        } else {
            //
        }
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            studentNumber: ['', [Validators.required, Validators.maxLength(10)]],
            identityNumber: ['', [Validators.required, Validators.maxLength(13)]],
            fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            emailAddess: ['', [Validators.required, validEmail.validEmail]],
            gender: ['', [Validators.required]],
            grade: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            teacher: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
        });
    }
}
