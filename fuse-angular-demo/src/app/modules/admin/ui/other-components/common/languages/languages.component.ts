import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';

@Component({
    selector   : 'languages',
    templateUrl: './languages.component.html'
})
export class LanguagesComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
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
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
