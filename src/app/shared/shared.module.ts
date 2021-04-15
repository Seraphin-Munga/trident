import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
    declarations: [FormControlErrorComponent],
    imports: [CommonModule, ReactiveFormsModule, NzFormModule, FormsModule],
    exports: [FormControlErrorComponent, NzFormModule, FormsModule]
})
export class SharedModule {}
