import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'modern',
    templateUrl    : './modern.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModernComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
