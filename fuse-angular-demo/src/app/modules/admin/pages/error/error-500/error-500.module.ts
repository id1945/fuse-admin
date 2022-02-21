import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error500Component } from 'app/modules/admin/pages/error/error-500/error-500.component';
import { error500Routes } from 'app/modules/admin/pages/error/error-500/error-500.routing';

@NgModule({
    declarations: [
        Error500Component
    ],
    imports     : [
        RouterModule.forChild(error500Routes)
    ]
})
export class Error500Module
{
}
