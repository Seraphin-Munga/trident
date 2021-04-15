import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { IAuthenticationModel } from '../models/authentication.model';

@Injectable({
    providedIn: 'root'
})
export class AuthJwtService {
    public constructor(
        private readonly _http: HttpClient,
        private readonly _localStorage: LocalStorageService,
        private readonly _sessionStorage: SessionStorageService
    ) {}

    public getToken(): string {
        return this._localStorage.retrieve('authenticationToken') || this._sessionStorage.retrieve('authenticationToken');
    }

    public async login(credentials: IAuthenticationModel): Promise<string> {
        this.clearLocalStorage();

        const response: HttpResponse<void> = await this._http
            .post<void>(`${environment.serverApiUrl}`, credentials, { observe: 'response' })
            .toPromise();
        const bearerToken = response.headers.get('Authorization');

        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer') {
            const jwt: string = bearerToken.slice(7, bearerToken.length);
            return jwt;
        }
        return null;
    }

    public clearLocalStorage(): void {
        this._localStorage.clear('authenticationToken');
        this._sessionStorage.clear('authenticationToken');
    }
}
