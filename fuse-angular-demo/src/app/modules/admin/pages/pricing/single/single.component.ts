import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'pricing-single',
    templateUrl    : './single.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSingleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
