import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'confirmation-required-modern',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ConfirmationRequiredModernComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
