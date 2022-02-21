import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'notes',
    templateUrl    : './notes.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
