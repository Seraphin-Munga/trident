import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingUserViewComponent } from './components/landing-user-view/landing-user-view.component';
import { UserRoutingModule } from './user-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { UserManagementTeachersComponent } from '../user-management/components/user-management-teachers/user-management-teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ArrowBackComponent } from './components/arrow-back/arrow-back.component';
import { UserManagementTeacherTableComponent } from './components/user-management-teacher-table/user-management-teacher-table.component';
import { TeacherRegisterOnPlatformComponent } from './components/teacher-register-on-platform/teacher-register-on-platform.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { UserManagementStudentsComponent } from '../user-management-student/components/user-management-students/user-management-students.component';
import { AddNewStudentComponent } from '../user-management-student/components/add-new-student/add-new-student.component';
import { UploadNewStudentComponent } from '../user-management-student/components/upload-new-student/upload-new-student.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { SharedModule } from '../shared/shared.module';
import { LicensesComponent } from '../lisence/components/licenses/licences.component';
import { ArrowLisenceBackComponent } from '../lisence/components/arrow-license-back/arrow-licence-back.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
    declarations: [
        LandingUserViewComponent,
        UserManagementTeachersComponent,
        ArrowBackComponent,
        UserManagementTeacherTableComponent,
        TeacherRegisterOnPlatformComponent,
        TeacherProfileComponent,
        UserManagementStudentsComponent,
        AddNewStudentComponent,
        UploadNewStudentComponent,
        LicensesComponent,
        ArrowLisenceBackComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        LayoutModule,
        RouterModule,
        NzRadioModule,
        NzCheckboxModule,
        NzButtonModule,
        NzTableModule,
        NzFormModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NzProgressModule,
        NzUploadModule,
        NzCardModule,
        NzModalModule
    ]
})
export class UserModule {}
