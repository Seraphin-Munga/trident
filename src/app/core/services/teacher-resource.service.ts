import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITeacherCreationModel } from '../models/teacher-creation.model';
import { IRegisterCreationModel } from '../models/register-creation.model';

@Injectable({
    providedIn: 'root'
})
export class TeacherResourceService {
    public constructor(private readonly _http: HttpClient) {
        ///
    }
    public async teacherCreation(model: IRegisterCreationModel): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl + '', model).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }

    public async registerCreation(model: ITeacherCreationModel): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl + '', model).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }
}
