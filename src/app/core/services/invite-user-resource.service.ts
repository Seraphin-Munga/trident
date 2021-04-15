import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IInviteUserModel } from '../../core/models/invite-user.model';

@Injectable({
    providedIn: 'root'
})
export class InviteUserResourceService {
    public constructor(private readonly _http: HttpClient) {
        ///
    }
    public async sendInvitationUser(model: IInviteUserModel): Promise<void> {
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
