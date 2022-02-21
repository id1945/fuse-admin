import { Component } from '@angular/core';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'fullscreen',
    templateUrl: './fullscreen.component.html'
})
export class FullscreenComponent
{
    /**
     * Constructor
     */
    constructor(private _fuseComponentsComponent: FuseComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
