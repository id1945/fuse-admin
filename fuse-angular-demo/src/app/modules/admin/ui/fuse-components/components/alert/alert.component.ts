import { Component } from '@angular/core';
import { FuseAlertService } from '@fuse/components/alert';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : [
        `
            fuse-alert {
                margin: 16px 0;
            }
        `
    ]
})
export class AlertComponent
{
    /**
     * Constructor
     */
    constructor(
        private _fuseAlertService: FuseAlertService,
        private _fuseComponentsComponent: FuseComponentsComponent
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Dismiss
        this._fuseAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void
    {
        // Show
        this._fuseAlertService.show(name);
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
