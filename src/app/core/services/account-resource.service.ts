import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAccountCreation } from '../models/account-creation.model';
import { AccountRetrievalModel } from '../models/account-retrieval.model';
import { plainToClass } from 'class-transformer';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { RoleModel } from '../models/role.model';

@Injectable({
    providedIn: 'root'
})
export class AccountResourceService {
    public _userIdentity: AccountRetrievalModel;
    public _authenticated = false;
    private readonly _resourceUrl: string = environment.serverApiUrl + '';

    public constructor(
        private readonly _http: HttpClient,
        private readonly _localStorage: LocalStorageService,
        private readonly _sessionStorage: SessionStorageService
    ) {}

    public async get(): Promise<AccountRetrievalModel> {
        try {
            const response = await this._http.get<AccountRetrievalModel>(`${environment.serverApiUrl}api/account`).toPromise();
            return plainToClass(AccountRetrievalModel, response);
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }

    public clearIdentitiy(): void {
        this._userIdentity = null;
        this._authenticated = false;
    }

    public async identitiy(): Promise<AccountRetrievalModel> {
        if (this._userIdentity) {
            return this._userIdentity;
        }

        if (!this.hasAuthenticationToken) {
            this.clearIdentitiy();
            return null;
        }

        try {
            const account: AccountRetrievalModel = await this.get();
            if (account) {
                this._userIdentity = account;
                this._authenticated = true;
            } else {
                this.clearIdentitiy();
            }
            return this._userIdentity;
        } catch (e) {
            this.clearIdentitiy();
            return null;
        }
    }

    public hasAnyAuthority(authorities: Array<RoleModel>): boolean {
        if (this._authenticated || !this._userIdentity || !this._userIdentity.role) {
            return false;
        }
        return authorities.includes(this._userIdentity.role);
    }

    public hasAuthenticationToken(): boolean {
        const token = this._localStorage.retrieve('authenticationToken') || this._sessionStorage.retrieve('authenticationToken');
        return !!token;
    }

    public async forgotPassword(account: IAccountCreation): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl + 'api/account', account).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }

    public async login(account: IAccountCreation): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl + 'api/account', account).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }

    public async newPassword(account: IAccountCreation): Promise<void> {
        try {
            await this._http.post<void>(environment.serverApiUrl + 'api/account', account).toPromise();
        } catch (error) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error('A connection could not be established. Please contact an administrator.');
            }
            throw Error(error.error);
        }
    }
}
