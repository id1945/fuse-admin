import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { Mail, MailCategory } from 'app/modules/admin/apps/mailbox/mailbox.types';

@Component({
    selector     : 'mailbox-list',
    templateUrl  : './list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MailboxListComponent implements OnInit, OnDestroy
{
    @ViewChild('mailList') mailList: ElementRef;

    category: MailCategory;
    mails: Mail[];
    mailsLoading: boolean = false;
    pagination: any;
    selectedMail: Mail;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        public mailboxComponent: MailboxComponent,
        private _mailboxService: MailboxService
    )
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
        // Category
        this._mailboxService.category$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((category: MailCategory) => {
                this.category = category;
            });

        // Mails
        this._mailboxService.mails$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mails: Mail[]) => {
                this.mails = mails;
            });

        // Mails loading
        this._mailboxService.mailsLoading$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mailsLoading: boolean) => {
                this.mailsLoading = mailsLoading;

                // If the mail list element is available & the mails are loaded...
                if ( this.mailList && !mailsLoading )
                {
                    // Reset the mail list element scroll position to top
                    this.mailList.nativeElement.scrollTo(0, 0);
                }
            });

        // Pagination
        this._mailboxService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination) => {
                this.pagination = pagination;
            });

        // Selected mail
        this._mailboxService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail: Mail) => {
                this.selectedMail = mail;
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On mail selected
     *
     * @param mail
     */
    onMailSelected(mail: Mail): void
    {
        // If the mail is unread...
        if ( mail.unread )
        {
            // Update the mail object
            mail.unread = false;

            // Update the mail on the server
            this._mailboxService.updateMail(mail.id, {unread: false}).subscribe();
        }

        // Execute the mailSelected observable
        this._mailboxService.selectedMailChanged.next(mail);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
