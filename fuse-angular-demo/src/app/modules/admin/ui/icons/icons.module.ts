import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { IconsComponent } from 'app/modules/admin/ui/icons/icons.component';
import { IconsResolver } from 'app/modules/admin/ui/icons/icons.resolvers';

export const routes: Route[] = [
    {
        // Redirect /icons to /icons/material-twotone
        path      : '',
        pathMatch : 'full',
        redirectTo: 'material-twotone'
    },
    {
        path     : '',
        component: IconsComponent,
        children : [
            {
                path   : '**',
                resolve: {
                    icons: IconsResolver
                }
            }
        ]
    }
];

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports     : [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class IconsModule
{
}
