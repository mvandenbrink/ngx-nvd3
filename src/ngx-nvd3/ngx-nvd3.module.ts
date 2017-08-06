import { NgModule } from '@angular/core';
import { NvD3Component } from './ngx-nvd3.component';
import { NvD3Directive } from './ngx-nvd3.directive';

@NgModule({
    declarations: [
        NvD3Component,
        NvD3Directive
    ],
    exports: [
        NvD3Component,
        NvD3Directive
    ]
})
export class NvD3Module { }
