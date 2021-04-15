import { Component } from '@angular/core';

@Component({
    selector: 'app-search-layout',
    templateUrl: './search-layout.component.html',
    styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent {
    public fullName: string;
    public userType: string;

    public constructor() {
        this.fullName = 'Full Name';
        this.userType = 'User Type'; /// After user login into the syterm, assign his/her  full name and user type to the varialbles.
    }
}
