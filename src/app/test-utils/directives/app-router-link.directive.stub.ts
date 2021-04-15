import { Directive, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[routerLink]'
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class AppRouterLinkDirectiveStub {
    @Input()
    public routerLink: string;
}
