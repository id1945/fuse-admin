import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'maintenance',
    templateUrl    : './maintenance.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
