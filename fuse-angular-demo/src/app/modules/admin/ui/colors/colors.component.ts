import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
