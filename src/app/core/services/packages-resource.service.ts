import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPackagesRetrievalModel } from '../models/packages-retrieval.model';
import { plainToClass } from 'class-transformer';
import { IInstitutionCreationModel } from "../models/institution-creation.model";
import { IPaymentCreation } from "../models/payment-creation.model"
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class PackagesResourceService {

  private url: "payment";
  private paymentData: any;

  public constructor(
    private readonly _http: HttpClient,
  ) { }

  public async get(): Promise<IPackagesRetrievalModel> {
    try {
      const response = await this._http.get<IPackagesRetrievalModel>(`${environment.serverApiUrl}/accounts/packages`).toPromise();
      return plainToClass(IPackagesRetrievalModel, response);
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error('A connection could not be established. Please contact an administrator.');
      }
      throw Error(error.error);
    }
  }

  public async schoolCreation(model: IInstitutionCreationModel): Promise<IInstitutionCreationModel> {
    try {

      await this._http.post<void>(`${environment.serverApiUrl}/accounts/`, model).toPromise().then((response) => {
        this.paymentData = response
      });
      return plainToClass(IInstitutionCreationModel, this.paymentData);
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error('A connection could not be established. Please contact an administrator.');
      }
      throw Error(error.error);
    }
  }

  public async payment(model: IPaymentCreation): Promise<void> {
    try {
      await this._http.post<void>(`https://paymentgateway.tlsag.com/index.php`, model).toPromise();
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error('A connection could not be established. Please contact an administrator.');
      }
      throw Error(error.error);
    }
  }

}
