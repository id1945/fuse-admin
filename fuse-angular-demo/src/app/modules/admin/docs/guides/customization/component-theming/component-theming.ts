import { Component } from '@angular/core';
import { GuidesComponent } from 'app/modules/admin/docs/guides/guides.component';

@Component({
    selector   : 'component-theming',
    templateUrl: './component-theming.html'
})
export class ComponentThemingComponent
{
    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent)
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
        this._guidesComponent.matDrawer.toggle();
    }
}
