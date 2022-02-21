import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from 'app/modules/admin/pages/error/error-404/error-404.component';
import { error404Routes } from 'app/modules/admin/pages/error/error-404/error-404.routing';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports     : [
        RouterModule.forChild(error404Routes)
    ]
})
export class Error404Module
{
}
