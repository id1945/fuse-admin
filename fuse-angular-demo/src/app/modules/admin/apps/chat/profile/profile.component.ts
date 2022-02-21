import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Profile } from 'app/modules/admin/apps/chat/chat.types';
import { ChatService } from 'app/modules/admin/apps/chat/chat.service';

@Component({
    selector       : 'chat-profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy
{
    @Input() drawer: MatDrawer;
    profile: Profile;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _chatService: ChatService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Profile
        this._chatService.profile$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((profile: Profile) => {
                this.profile = profile;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
