import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAuthenticationModel } from '../models/authentication.model';
import { AuthJwtService } from './auth-jwt.service';
import { AccountResourceService } from './account-resource.service';
import { AccountRetrievalModel } from '../models/account-retrieval.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationResourceService {
    private readonly _resourceUrl: string = environment.serverApiUrl + '';

    public constructor(
        private readonly _http: HttpClient,
        private readonly _accountService: AccountResourceService,
        private readonly _authServerProvider: AuthJwtService
    ) {}

    public async login(credentials: IAuthenticationModel): Promise<AccountRetrievalModel> {
        if (await this._authServerProvider.login(credentials)) {
            this._accountService.clearIdentitiy();
            return this._accountService.identitiy();
        }
    }
}
