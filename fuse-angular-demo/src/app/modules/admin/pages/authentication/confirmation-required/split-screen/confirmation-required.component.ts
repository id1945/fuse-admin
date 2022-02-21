import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'confirmation-required-split-screen',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ConfirmationRequiredSplitScreenComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
