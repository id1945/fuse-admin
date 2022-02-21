import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { AnimationsComponent } from 'app/modules/admin/ui/animations/animations.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AnimationsComponent
    }
];

@NgModule({
    declarations: [
        AnimationsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class AnimationsModule
{
}
