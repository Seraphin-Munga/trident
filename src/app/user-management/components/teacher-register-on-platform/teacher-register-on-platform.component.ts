import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherResourceService } from '../../../core/services/teacher-resource.service';

@Component({
    selector: 'app-teacher-register-on-platform',
    templateUrl: './teacher-register-on-platform.component.html',
    styleUrls: ['./teacher-register-on-platform.component.scss']
})
export class TeacherRegisterOnPlatformComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public constructor(private readonly _formBuilder: FormBuilder, private readonly _service: TeacherResourceService) {
        //
    }

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public async register(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._service.registerCreation(this.form.value);
        } else {
            //
        }
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            surname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            identityNumber: ['', [Validators.required, Validators.maxLength(13)]],
            grade: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
        });
        this.saving = false;
    }
}
