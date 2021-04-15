import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesResourceService } from '../../../core/services/packages-resource.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-select',
    templateUrl: './select-packages.component.html',
    styleUrls: ['./select-packages.component.scss']
})
export class SelectPackagesComponent implements OnInit {
    public listOfData: any;
    public toggle: number;
    public radioValue = 'A';
    public duplicate = [];

    public constructor(private readonly _router: Router, private readonly _service: PackagesResourceService, private readonly _sessionStorage: SessionStorageService) { }

    public ngOnInit(): void {
        this.getAllPackages();
    }

    public getAllPackages(): void {
        let packages = [];
        let unique = [];

        this._service.get().then((result) => {
            for (let index = 0; index < result.length; index++) {
                if (!unique.includes(result[index].name)) {
                    unique.push(result[index].name)
                }
            }

            for (let index = 0; index < unique.length; index++) {
                let copyUnique = unique[index];

                for (let i = 0; i < result.length; i++) {

                    let model = {
                        productPerInstitution: "",
                        rangePerInstitutions: []
                    };

                    let descrioption = {
                        price: 0,
                        description: '',
                        code: ''
                    }

                    if (unique[index] === result[i].name) {

                        if (unique[index] === copyUnique) {
                            model.productPerInstitution = result[i].name
                            descrioption.price = result[i].unitPrice;
                            descrioption.description = result[i].description
                            descrioption.code = result[i].code

                            model.rangePerInstitutions.push(descrioption);
                            packages.push(model)

                            copyUnique = "";

                        } else {

                            descrioption.price = result[i].unitPrice;
                            descrioption.code = result[i].code
                            descrioption.description = result[i].description
                            packages[index].rangePerInstitutions.push(descrioption)

                        }

                    }
                }

            }

            this.listOfData = packages

            console.log(packages)

        });

    }

    public async goNext(code, price): Promise<boolean> {
        await this._sessionStorage.store("code", code);
        await this._sessionStorage.store("price", price);
        return this._router.navigate(['package/institution-information']);
    }
}
