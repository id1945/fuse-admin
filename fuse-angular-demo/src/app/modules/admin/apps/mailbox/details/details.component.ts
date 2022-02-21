import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { Mail, MailFolder, MailLabel } from 'app/modules/admin/apps/mailbox/mailbox.types';
import { labelColorDefs } from 'app/modules/admin/apps/mailbox/mailbox.constants';

@Component({
    selector     : 'mailbox-details',
    templateUrl  : './details.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MailboxDetailsComponent implements OnInit, OnDestroy
{
    @ViewChild('infoDetailsPanelOrigin') private _infoDetailsPanelOrigin: MatButton;
    @ViewChild('infoDetailsPanel') private _infoDetailsPanel: TemplateRef<any>;

    folders: MailFolder[];
    labelColors: any;
    labels: MailLabel[];
    mail: Mail;
    replyFormActive: boolean = false;
    private _overlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _elementRef: ElementRef,
        private _mailboxService: MailboxService,
        private _overlay: Overlay,
        private _router: Router,
        private _viewContainerRef: ViewContainerRef
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
        // Get the label colors
        this.labelColors = labelColorDefs;

        // Folders
        this._mailboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders: MailFolder[]) => {
                this.folders = folders;
            });

        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels: MailLabel[]) => {
                this.labels = labels;
            });

        // Mail
        this._mailboxService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail: Mail) => {
                this.mail = mail;
            });

        // Selected mail changed
        this._mailboxService.selectedMailChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // De-activate the reply form
                this.replyFormActive = false;
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
     * Get the current folder
     */
    getCurrentFolder(): any
    {
        return this._activatedRoute.snapshot.paramMap.get('folder');
    }

    /**
     * Move to folder
     *
     * @param folderSlug
     */
    moveToFolder(folderSlug: string): void
    {
        // Find the folder details
        const folder = this.folders.find(item => item.slug === folderSlug);

        // Return if the current folder of the mail
        // is already equals to the given folder
        if ( this.mail.folder === folder.id )
        {
            return;
        }

        // Update the mail object
        this.mail.folder = folder.id;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {folder: this.mail.folder}).subscribe();

        // Navigate to the parent
        this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
    }

    /**
     * Toggle label
     *
     * @param label
     */
    toggleLabel(label: MailLabel): void
    {
        let deleted = false;

        // Update the mail object
        if ( this.mail.labels.includes(label.id) )
        {
            // Set the deleted
            deleted = true;

            // Delete the label
            this.mail.labels.splice(this.mail.labels.indexOf(label.id), 1);
        }
        else
        {
            // Add the label
            this.mail.labels.push(label.id);
        }

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {labels: this.mail.labels}).subscribe();

        // If the label was deleted...
        if ( deleted )
        {
            // If the current activated route has a label parameter and it equals to the one we are removing...
            if ( this._activatedRoute.snapshot.paramMap.get('label') && this._activatedRoute.snapshot.paramMap.get('label') === label.slug )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
            }
        }
    }

    /**
     * Toggle important
     */
    toggleImportant(): void
    {
        // Update the mail object
        this.mail.important = !this.mail.important;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {important: this.mail.important}).subscribe();

        // If the important was removed...
        if ( !this.mail.important )
        {
            // If the current activated route has a filter parameter and it equals to the 'important'...
            if ( this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'important' )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
            }
        }
    }

    /**
     * Toggle star
     */
    toggleStar(): void
    {
        // Update the mail object
        this.mail.starred = !this.mail.starred;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {starred: this.mail.starred}).subscribe();

        // If the star was removed...
        if ( !this.mail.starred )
        {
            // If the current activated route has a filter parameter and it equals to the 'starred'...
            if ( this._activatedRoute.snapshot.paramMap.get('filter') && this._activatedRoute.snapshot.paramMap.get('filter') === 'starred' )
            {
                // Navigate to the parent
                this._router.navigate(['./'], {relativeTo: this._activatedRoute.parent});
            }
        }
    }

    /**
     * Toggle unread
     *
     * @param unread
     */
    toggleUnread(unread: boolean): void
    {
        // Update the mail object
        this.mail.unread = unread;

        // Update the mail on the server
        this._mailboxService.updateMail(this.mail.id, {unread: this.mail.unread}).subscribe();
    }

    /**
     * Reply
     */
    reply(): void
    {
        // Activate the reply form
        this.replyFormActive = true;

        // Scroll to the bottom of the details pane
        setTimeout(() => {
            this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
        });
    }

    /**
     * Reply all
     */
    replyAll(): void
    {
        // Activate the reply form
        this.replyFormActive = true;

        // Scroll to the bottom of the details pane
        setTimeout(() => {
            this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
        });
    }

    /**
     * Forward
     */
    forward(): void
    {
        // Activate the reply form
        this.replyFormActive = true;

        // Scroll to the bottom of the details pane
        setTimeout(() => {
            this._elementRef.nativeElement.scrollTop = this._elementRef.nativeElement.scrollHeight;
        });
    }

    /**
     * Discard
     */
    discard(): void
    {
        // Deactivate the reply form
        this.replyFormActive = false;
    }

    /**
     * Send
     */
    send(): void
    {
        // Deactivate the reply form
        this.replyFormActive = false;
    }

    /**
     * Open info details panel
     */
    openInfoDetailsPanel(): void
    {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            backdropClass   : '',
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._infoDetailsPanelOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions(true)
                                  .withViewportMargin(16)
                                  .withLockedPosition(true)
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'start',
                                          overlayY: 'bottom'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'bottom',
                                          overlayX: 'end',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'bottom'
                                      }
                                  ])
        });

        // Create a portal from the template
        const templatePortal = new TemplatePortal(this._infoDetailsPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._overlayRef.attach(templatePortal);

        // Subscribe to the backdrop click
        this._overlayRef.backdropClick().subscribe(() => {

            // If overlay exists and attached...
            if ( this._overlayRef && this._overlayRef.hasAttached() )
            {
                // Detach it
                this._overlayRef.detach();
            }

            // If template portal exists and attached...
            if ( templatePortal && templatePortal.isAttached )
            {
                // Detach it
                templatePortal.detach();
            }
        });
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
