import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'tasks',
    templateUrl    : './tasks.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
