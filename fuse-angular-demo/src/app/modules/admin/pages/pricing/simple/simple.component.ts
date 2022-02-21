import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'pricing-simple',
    templateUrl    : './simple.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSimpleComponent
{
    yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
