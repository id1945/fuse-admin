import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'chat',
    templateUrl    : './chat.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
