import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialComponentsComponent } from 'app/modules/admin/ui/material-components/material-components.component';

export const routes: Route[] = [
    {
        path     : '',
        component: MaterialComponentsComponent
    }
];

@NgModule({
    declarations: [
        MaterialComponentsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class MaterialComponentsModule
{
}
