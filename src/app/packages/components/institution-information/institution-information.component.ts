import { Component, OnInit } from '@angular/core';
import { IInstitutionCreationModel } from '../../../core/models/institution-creation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-institution-info',
    templateUrl: './institution-information.component.html',
    styleUrls: ['./institution-information.component.scss']
})
export class InstitutionInformationComponent implements OnInit {
    public institutionType: 'M';
    public form: FormGroup;
    public institutionDataForm = null;
    public saving: boolean;
    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _sessionStorage: SessionStorageService
    ) { }

    public ngOnInit(): void {
        this.setFormDefaultValues();
    }

    public initializeInstitution(): void {
        const data: IInstitutionCreationModel = {
            institutionName: this.form.value.nameOfInstitution,
            institutionRegistrationNumber: this.form.value.regNo,
            institutionType: this.form.value.institutionType,
            samePostAddress: this.form.value.samePostAddress,

            companyPhysicalAddress: {
                streetAddress: this.form.value.physicalAddress,
                streetAddressLine2: "",
                province: this.form.value.province,
                city: this.form.value.city,
                postalCode: this.form.value.postalCode,
                country: this.form.value.country
            },
            companyPostalAddress: {
                shpStreetAddress: this.form.value.postalAddress,
                shpStreetAddressLine2: "",
                shpProvince: this.form.value.shpProvince,
                shpCity: this.form.value.shpCity,
                shpPostalCode: this.form.value.shpPostalCode,
                shpCountry: this.form.value.shpCountry,
            },

            companyContact: {
                contactPerson: this.form.value.contactPerson,
                contactEmailAddress: this.form.value.emailAddress,
                contactLandlineNumber: this.form.value.landlineNumber,
                contactMobileNumber: this.form.value.mobileNumber,
            },
            superAdminEmailAddress: this.form.value.superAdminOneEmailAddress,
            superAdminTwoEmailAddress: this.form.value.superAdminTwoEmailAddress,
            xeroItemId: "BRI-ENT-IQ 500",
            acceptedTerms: this.form.value.acceptedTerms,
        };

        this.institutionDataForm = data;
    }

    public async next(): Promise<boolean> {
        this.saving = true;
        if (this.form.valid) {
            this.initializeInstitution();
            this._sessionStorage.store('institutionDataForm', this.institutionDataForm);
            return this._router.navigate(['/package/package-payment-information']);
        } else {
            return false;
        }
    }

    private setFormDefaultValues(): void {
        this.form = this._formBuilder.group({
            nameOfInstitution: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            regNo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            institutionType: [[{ value: '' }], [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            physicalAddress: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            postalAddress: ['', [Validators.required]],
            // samePostAddress: [false, [Validators.required]],
            contactPerson: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            emailAddress: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            superAdminOneEmailAddress: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            superAdminTwoEmailAddress: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            landlineNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            mobileNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
             
            province: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            city: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            postalCode: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            country: [[{ value: '' }], [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],


            shpProvince: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            shpCity: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            shpPostalCode: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
            shpCountry: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],

            acceptedTerms: [false,Validators.required],

        });
    }
}
