import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
    public form: FormGroup;
    public saving: boolean;

    public constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}
    public ngOnInit(): void {
        this.initializeForm();
    }

    public filter(): void {
        this.saving = true;
    }

    public initializeForm(): void {
        this.form = this._formBuilder.group({
            filterStartDate: ['', [Validators.required]],
            filterEndDate: ['', [Validators.required]],
            type: ['', [Validators.required]],
            licences: ['', [Validators.required]]
        });
        this.saving = false;
    }
}
