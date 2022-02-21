import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'contacts',
    templateUrl    : './contacts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
