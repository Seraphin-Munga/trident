export class IInstitutionCreationModel {
    institutionName: string;
    institutionRegistrationNumber: string;
    institutionType: string;
    samePostAddress: boolean;

    companyPhysicalAddress: {
        streetAddress: string;
        streetAddressLine2: string;
        province: string;
        city: string;
        postalCode: string;
        country: string
    }

    companyPostalAddress: {
        shpStreetAddress: string;
        shpStreetAddressLine2: string,
        shpProvince: string,
        shpCity: string,
        shpPostalCode: string,
        shpCountry: string
    }

    companyContact: {
        contactPerson: string;
        contactEmailAddress: string;
        contactLandlineNumber: string;
        contactMobileNumber: string;
    }

    superAdminEmailAddress: string;
    superAdminTwoEmailAddress: string;
    xeroItemId: string;
    acceptedTerms: boolean
}
