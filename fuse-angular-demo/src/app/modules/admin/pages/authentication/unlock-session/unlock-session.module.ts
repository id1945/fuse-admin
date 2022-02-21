import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { UnlockSessionClassicComponent } from 'app/modules/admin/pages/authentication/unlock-session/classic/unlock-session.component';
import { UnlockSessionModernComponent } from 'app/modules/admin/pages/authentication/unlock-session/modern/unlock-session.component';
import { UnlockSessionModernReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/modern-reversed/unlock-session.component';
import { UnlockSessionFullscreenComponent } from 'app/modules/admin/pages/authentication/unlock-session/fullscreen/unlock-session.component';
import { UnlockSessionFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/fullscreen-reversed/unlock-session.component';
import { UnlockSessionSplitScreenComponent } from 'app/modules/admin/pages/authentication/unlock-session/split-screen/unlock-session.component';
import { UnlockSessionSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/unlock-session/split-screen-reversed/unlock-session.component';

const routes: Routes = [
    {
        path    : 'unlock-session',
        children: [
            {
                path     : 'classic',
                component: UnlockSessionClassicComponent
            },
            {
                path     : 'modern',
                component: UnlockSessionModernComponent
            },
            {
                path     : 'modern-reversed',
                component: UnlockSessionModernReversedComponent
            },
            {
                path     : 'split-screen',
                component: UnlockSessionSplitScreenComponent
            },
            {
                path     : 'split-screen-reversed',
                component: UnlockSessionSplitScreenReversedComponent
            },
            {
                path     : 'fullscreen',
                component: UnlockSessionFullscreenComponent
            },
            {
                path     : 'fullscreen-reversed',
                component: UnlockSessionFullscreenReversedComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        UnlockSessionClassicComponent,
        UnlockSessionModernComponent,
        UnlockSessionModernReversedComponent,
        UnlockSessionFullscreenComponent,
        UnlockSessionFullscreenReversedComponent,
        UnlockSessionSplitScreenComponent,
        UnlockSessionSplitScreenReversedComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class UnlockSessionModule
{
}
