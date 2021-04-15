import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFooterComponentStub } from '../test-utils/components/nz-footer.component.stub';
import { NzHeaderComponentStub } from '../test-utils/components/nz-header.component.stub';
import { NzLayoutComponentStub } from '../test-utils/components/nz-layout.component.stub';
import { NzFormLabelComponentStub } from '../test-utils/components/nz-form-label.component.stub';
import { NzFormItemComponentStub } from '../test-utils/components/nz-form-item.component.stub';
import { NzFormControlComponentStub } from '../test-utils/components/nz-form-control.component.stub';
import { NzContentComponentStub } from '../test-utils/components/nz-content.component.stub';
import { NzStepsComponent } from '../test-utils/components/nz-steps.component.stub';
import { NzStepComponent } from '../test-utils/components/nz-step.component.stub';
import { NzTableComponentStub } from '../test-utils/components/nz-table.component.stub';

import { AppFooterComponent } from '../test-utils/components/app-footer.component.stub';
import { AppHeaderComponent } from '../test-utils/components/app-header.component.stub';
import { AppOrderSummaryComponent } from '../test-utils/components/app-ordersummary.component.stub';
import { AppStepsComponent } from '../test-utils/components/app-steps.component.stub';
import { NzRadioGroupComponent } from '../test-utils/components/nz-radio-group.component.stub';
import { AppRouterOutletComponent } from '../test-utils/components/app.router-outlet.stub';
import { AppFormControlErrorComponentStub } from '../test-utils/components/app-form-control-error.component.stub';
import { NzSpanDirectiveStub } from '../test-utils/directives/nz-span-directive.stub';
import { CurrentDirectiveStub } from '../test-utils/directives/nz.curent.directive.stub';
import { NzCurrentDirectiveStub } from '../test-utils/directives/nz.current.directive.stub';
import { NzTypeDirectiveStub } from '../test-utils/directives/nz-type.directive.stub';
import { NzDataDirectiveStub } from '../test-utils/directives/nz.data.directive.stub';
import { NzFrontPaginationDirectiveStub } from '../test-utils/directives/nz.front.pagination.stub';
import { NzFormExplainComponentStub } from '../test-utils/components/nz-form-explain.component.stub';
import { NzLgDirectiveStub } from '../test-utils/directives/nz-lg.directive.stub';
import { NzXsDirectiveStub } from '../test-utils/directives/nz-xs.directive.stub';
import { AppReportTableStub } from '../test-utils/components/app-report-table.component.stub';
import { AppReportSummaryComponentStub } from '../test-utils/components/app-report-summary.component.stub';

@NgModule({
    declarations: [
        NzFooterComponentStub,
        NzLayoutComponentStub,
        NzFormLabelComponentStub,
        NzFormExplainComponentStub,
        NzFormItemComponentStub,
        NzFormControlComponentStub,
        NzContentComponentStub,
        NzStepsComponent,
        NzStepComponent,
        NzTableComponentStub,
        NzHeaderComponentStub,
        AppFooterComponent,
        AppHeaderComponent,
        AppOrderSummaryComponent,
        AppStepsComponent,
        NzRadioGroupComponent,
        AppRouterOutletComponent,
        CurrentDirectiveStub,
        NzSpanDirectiveStub,
        NzCurrentDirectiveStub,
        NzTypeDirectiveStub,
        NzDataDirectiveStub,
        NzFrontPaginationDirectiveStub,
        AppFormControlErrorComponentStub,
        NzLgDirectiveStub,
        NzXsDirectiveStub,
        AppReportTableStub,
        AppReportSummaryComponentStub
    ],
    imports: [CommonModule]
})
export class TestUtilsModule {}
