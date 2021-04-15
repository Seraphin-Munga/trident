import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IStudentCreationModel } from '../models/student-creation.model';

@Injectable({
    providedIn: 'root'
})
export class StudentResourceService {
    public constructor(private readonly _http: HttpClient) {
        ///
    }

    public async create(model: IStudentCreationModel): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl, model).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }
}
