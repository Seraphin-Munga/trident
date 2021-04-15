import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validEmail } from '../../../core/validators';
import { InviteUserResourceService } from '../../../core/services/invite-user-resource.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-user-management-teachers',
    templateUrl: './user-management-teachers.component.html',
    styleUrls: ['./user-management-teachers.component.scss']
})
export class UserManagementTeachersComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;
    public isVisible: boolean;
    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _service: InviteUserResourceService,
        private readonly _router: Router
    ) {}

    public ngOnInit(): void {
        this.initializeForm();
    }

    public async submit(): Promise<void> {
        this.saving = true;
        if (this.form.valid) {
            await this._router.navigate(['/dashboard/teacher-register']);
            await this._service.sendInvitationUser(this.form.value);
        }
    }

    public excel(): void {
        this.isVisible = true;
    }

    public async handleOk(): Promise<void> {
        await this._router.navigate(['/dashboard/upload-new-student']);
    }

    public initializeForm(): void {
        this.form = this._formBuilder.group({
            emailAddress: ['', [Validators.required, validEmail.validEmail]]
        });
        this.saving = false;
    }
}
