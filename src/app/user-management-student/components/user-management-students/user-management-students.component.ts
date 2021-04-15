import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-user-management-students',
    templateUrl: './user-management-students.component.html',
    styleUrls: ['./user-management-students.component.scss']
})
export class UserManagementStudentsComponent {
    public isVisible: boolean;
    public constructor(private readonly _router: Router) {}

    public excel(): void {
        this.isVisible = true;
    }

    public async handleOk(): Promise<void> {
        await this._router.navigate(['/dashboard/upload-new-student']);
    }
}
