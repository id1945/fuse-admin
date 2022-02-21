import { Component } from '@angular/core';
import { FuseDrawerMode, FuseDrawerService } from '@fuse/components/drawer';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'drawer',
    templateUrl: './drawer.component.html'
})
export class DrawerComponent
{
    drawerMode: FuseDrawerMode;

    /**
     * Constructor
     */
    constructor(
        private _fuseDrawerService: FuseDrawerService,
        private _fuseComponentsComponent: FuseComponentsComponent
    )
    {
        // Set the defaults
        this.drawerMode = 'side';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     *
     * @param name
     */
    toggleDrawerMode(name: string): void
    {
        const drawer = this._fuseDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.mode = drawer.mode === 'side' ? 'over' : 'side';
        }
    }

    /**
     * Toggle the drawer open
     *
     * @param name
     */
    toggleDrawerOpen(name: string): void
    {
        const drawer = this._fuseDrawerService.getComponent(name);

        if ( drawer )
        {
            drawer.toggle();
        }
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
