import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Chat, Contact } from 'app/modules/admin/apps/chat/chat.types';

@Component({
    selector       : 'chat-contact-info',
    templateUrl    : './contact-info.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent
{
    @Input() chat: Chat;
    @Input() drawer: MatDrawer;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
