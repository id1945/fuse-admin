import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'pricing-modern',
    templateUrl    : './modern.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingModernComponent
{
    yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
