import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DatatableComponent } from 'app/modules/admin/ui/datatable/datatable.component';

export const routes: Route[] = [
    {
        path     : '',
        component: DatatableComponent
    }
];

@NgModule({
    declarations: [
        DatatableComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class DatatableModule
{
}
