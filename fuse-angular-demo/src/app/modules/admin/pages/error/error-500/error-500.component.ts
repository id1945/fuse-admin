import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'error-500',
    templateUrl    : './error-500.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error500Component
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
