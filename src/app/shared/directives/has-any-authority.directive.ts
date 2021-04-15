import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleModel } from '../../../app/core/models/role.model';
import { AccountResourceService } from '../../core/services/account-resource.service';

@Directive({
    selector: '[appHasAnyAuthority]'
})
export class HasAnyAuthorityDirective {
    private _authorities: Array<RoleModel>;

    public constructor(
        private readonly _accountService: AccountResourceService,
        private readonly _templateRef: TemplateRef<Element>,
        private readonly _viewContainerRef: ViewContainerRef
    ) {}

    @Input()
    public set appHasAnyAuthority(value: RoleModel | Array<RoleModel>) {
        this._authorities = value instanceof Array ? value : [value];
        this.updateView();
    }

    private updateView(): void {
        const hasAnyAuthority = this._accountService.hasAnyAuthority(this._authorities);
        this._viewContainerRef.clear();
        if (hasAnyAuthority) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}
