import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { LandingUserViewComponent } from '../user-management/components/landing-user-view/landing-user-view.component';
import { UserManagementTeachersComponent } from '../user-management/components/user-management-teachers/user-management-teachers.component';
import { TeacherRegisterOnPlatformComponent } from '../user-management/components/teacher-register-on-platform/teacher-register-on-platform.component';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { TeacherProfileComponent } from '../user-management/components/teacher-profile/teacher-profile.component';
import { UserManagementStudentsComponent } from '../user-management-student/components/user-management-students/user-management-students.component';
import { AddNewStudentComponent } from '../user-management-student/components/add-new-student/add-new-student.component';
import { UploadNewStudentComponent } from '../user-management-student/components/upload-new-student/upload-new-student.component';
import { LicensesComponent } from '../lisence/components/licenses/licences.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            { path: 'landing-view', component: LandingUserViewComponent },
            { path: 'user-management-teachers', component: UserManagementTeachersComponent },
            { path: 'teacher-profile/:teacherID', component: TeacherProfileComponent },
            { path: 'user-management-students', component: UserManagementStudentsComponent },
            { path: 'add-new-student', component: AddNewStudentComponent },
            { path: 'upload-new-student', component: UploadNewStudentComponent },
            { path: 'licenses', component: LicensesComponent }
        ]
    },

    {
        path: '',
        component: SiteLayoutComponent,
        children: [{ path: 'teacher-register', component: TeacherRegisterOnPlatformComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
