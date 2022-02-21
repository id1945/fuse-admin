import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { TailwindCSSComponent } from 'app/modules/admin/ui/tailwindcss/tailwindcss.component';

export const routes: Route[] = [
    {
        path     : '',
        component: TailwindCSSComponent
    }
];

@NgModule({
    declarations: [
        TailwindCSSComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class TailwindCSSModule
{
}
