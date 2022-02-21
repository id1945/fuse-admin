import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmationRequiredClassicComponent } from 'app/modules/admin/pages/authentication/confirmation-required/classic/confirmation-required.component';
import { ConfirmationRequiredModernComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern/confirmation-required.component';
import { ConfirmationRequiredModernReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/modern-reversed/confirmation-required.component';
import { ConfirmationRequiredFullscreenComponent } from 'app/modules/admin/pages/authentication/confirmation-required/fullscreen/confirmation-required.component';
import { ConfirmationRequiredFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/fullscreen-reversed/confirmation-required.component';
import { ConfirmationRequiredSplitScreenComponent } from 'app/modules/admin/pages/authentication/confirmation-required/split-screen/confirmation-required.component';
import { ConfirmationRequiredSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/confirmation-required/split-screen-reversed/confirmation-required.component';

const routes: Routes = [
    {
        path    : 'confirmation-required',
        children: [
            {
                path     : 'classic',
                component: ConfirmationRequiredClassicComponent
            },
            {
                path     : 'modern',
                component: ConfirmationRequiredModernComponent
            },
            {
                path     : 'modern-reversed',
                component: ConfirmationRequiredModernReversedComponent
            },
            {
                path     : 'split-screen',
                component: ConfirmationRequiredSplitScreenComponent
            },
            {
                path     : 'split-screen-reversed',
                component: ConfirmationRequiredSplitScreenReversedComponent
            },
            {
                path     : 'fullscreen',
                component: ConfirmationRequiredFullscreenComponent
            },
            {
                path     : 'fullscreen-reversed',
                component: ConfirmationRequiredFullscreenReversedComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ConfirmationRequiredClassicComponent,
        ConfirmationRequiredModernComponent,
        ConfirmationRequiredModernReversedComponent,
        ConfirmationRequiredFullscreenComponent,
        ConfirmationRequiredFullscreenReversedComponent,
        ConfirmationRequiredSplitScreenComponent,
        ConfirmationRequiredSplitScreenReversedComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class ConfirmationRequiredModule
{
}
