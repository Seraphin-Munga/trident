import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pathname: string;
    public headerTitle: string;
    public constructor(route: ActivatedRoute) {
        if (route.snapshot.firstChild !== null) {
            this.pathname = route.snapshot.firstChild.pathFromRoot[1].routeConfig.path;
        }
    }
    public ngOnInit(): void {
        console.log(this.headerTitle);
        if (this.pathname !== 'account') {
            this.headerTitle = 'Cancel and return to website';
        }
    }
}
