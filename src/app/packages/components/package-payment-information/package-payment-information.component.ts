import { Component, OnInit } from '@angular/core';
import { IInstitutionCreationModel } from '../../../core/models/institution-creation.model';
import { SessionStorageService } from 'ngx-webstorage';
import { PackagesResourceService } from '../../../core/services/packages-resource.service'
import { Router } from '@angular/router';
import { IPaymentCreation } from "../../../../app/core/models/payment-creation.model"

@Component({
    selector: 'app-payment-info',
    templateUrl: './package-payment-information.component.html',
    styleUrls: ['./package-payment-information.component.scss']
})
export class PackagePaymentInformationComponent implements OnInit {
    public radioValue: 'A';
    public institution: IInstitutionCreationModel;
    public paymentForm: IPaymentCreation;
    private paymentData: any;
    public constructor(private readonly _sessionStorage: SessionStorageService, private readonly _service: PackagesResourceService, private readonly _router: Router,) { }

    public ngOnInit(): void {
        this.institution = this._sessionStorage.retrieve('institutionDataForm');
    }

    public pay(): void {
        this._service.schoolCreation(this.institution).then((response) => {
            this.paymentData = response;

            this.paymentForm = {
                m_uuid: this.paymentData.muuid,
                m_account_uuid: this.paymentData.maccountUuid,
                m_tx_id: this.paymentData.mtxId,
                m_tx_amount: this.paymentData.mtxAmount,
                m_tx_item_name: this.paymentData.mtxItemName,
                m_tx_item_description: this.paymentData.mtxItemDescription,
                m_return_url: this.paymentData.mreturnUrl,
                m_cancel_url: this.paymentData.mcancelUrl,
                m_tx_currency:  "ZAR",
                checksum: this.paymentData.checksum
            }

            this.proceePayment();
            this._router.navigate(['/package/confirmation-package']);
        });
    }


    public proceePayment(): void {
        this._service.payment(this.paymentForm);
    }

}
