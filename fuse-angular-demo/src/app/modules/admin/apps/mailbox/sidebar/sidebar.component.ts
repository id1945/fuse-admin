import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailboxComposeComponent } from 'app/modules/admin/apps/mailbox/compose/compose.component';
import { labelColorDefs } from 'app/modules/admin/apps/mailbox/mailbox.constants';
import { MailFilter, MailFolder, MailLabel } from 'app/modules/admin/apps/mailbox/mailbox.types';

@Component({
    selector     : 'mailbox-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxSidebarComponent implements OnInit, OnDestroy
{
    filters: MailFilter[];
    folders: MailFolder[];
    labels: MailLabel[];
    menuData: FuseNavigationItem[] = [];
    private _filtersMenuData: FuseNavigationItem[] = [];
    private _foldersMenuData: FuseNavigationItem[] = [];
    private _labelsMenuData: FuseNavigationItem[] = [];
    private _otherMenuData: FuseNavigationItem[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _mailboxService: MailboxService,
        private _matDialog: MatDialog,
        private _fuseNavigationService: FuseNavigationService
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
        // Filters
        this._mailboxService.filters$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((filters: MailFilter[]) => {
                this.filters = filters;

                // Generate menu links
                this._generateFiltersMenuLinks();
            });

        // Folders
        this._mailboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders: MailFolder[]) => {
                this.folders = folders;

                // Generate menu links
                this._generateFoldersMenuLinks();

                // Update navigation badge
                this._updateNavigationBadge(folders);
            });

        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels: MailLabel[]) => {
                this.labels = labels;

                // Generate menu links
                this._generateLabelsMenuLinks();
            });

        // Generate other menu links
        this._generateOtherMenuLinks();
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
     * Open compose dialog
     */
    openComposeDialog(): void
    {
        // Open the dialog
        const dialogRef = this._matDialog.open(MailboxComposeComponent);

        dialogRef.afterClosed()
                 .subscribe((result) => {
                     console.log('Compose dialog was closed!');
                 });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generate menus for folders
     *
     * @private
     */
    private _generateFoldersMenuLinks(): void
    {
        // Reset the folders menu data
        this._foldersMenuData = [];

        // Iterate through the folders
        this.folders.forEach((folder) => {

            // Generate menu item for the folder
            const menuItem: FuseNavigationItem = {
                id   : folder.id,
                title: folder.title,
                type : 'basic',
                icon : folder.icon,
                link : '/apps/mailbox/' + folder.slug
            };

            // If the count is available and is bigger than zero...
            if ( folder.count && folder.count > 0 )
            {
                // Add the count as a badge
                menuItem['badge'] = {
                    title: folder.count + ''
                };
            }

            // Push the menu item to the folders menu data
            this._foldersMenuData.push(menuItem);
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate menus for filters
     *
     * @private
     */
    private _generateFiltersMenuLinks(): void
    {
        // Reset the filters menu
        this._filtersMenuData = [];

        // Iterate through the filters
        this.filters.forEach((filter) => {

            // Generate menu item for the filter
            this._filtersMenuData.push({
                id   : filter.id,
                title: filter.title,
                type : 'basic',
                icon : filter.icon,
                link : '/apps/mailbox/filter/' + filter.slug
            });
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate menus for labels
     *
     * @private
     */
    private _generateLabelsMenuLinks(): void
    {
        // Reset the labels menu
        this._labelsMenuData = [];

        // Iterate through the labels
        this.labels.forEach((label) => {

            // Generate menu item for the label
            this._labelsMenuData.push({
                id     : label.id,
                title  : label.title,
                type   : 'basic',
                icon   : 'heroicons_outline:tag',
                classes: {
                    icon: labelColorDefs[label.color].text
                },
                link   : '/apps/mailbox/label/' + label.slug
            });
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate other menus
     *
     * @private
     */
    private _generateOtherMenuLinks(): void
    {
        // Settings menu
        this._otherMenuData.push({
            title: 'Settings',
            type : 'basic',
            icon : 'heroicons_outline:cog',
            link : '/apps/mailbox/settings'
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Update the menu data
     *
     * @private
     */
    private _updateMenuData(): void
    {
        this.menuData = [
            {
                title   : 'MAILBOXES',
                type    : 'group',
                children: [
                    ...this._foldersMenuData
                ]
            },
            {
                title   : 'FILTERS',
                type    : 'group',
                children: [
                    ...this._filtersMenuData
                ]
            },
            {
                title   : 'LABELS',
                type    : 'group',
                children: [
                    ...this._labelsMenuData
                ]
            },
            {
                type: 'spacer'
            },
            ...this._otherMenuData
        ];
    }

    /**
     * Update the navigation badge using the
     * unread count of the inbox folder
     *
     * @param folders
     * @private
     */
    private _updateNavigationBadge(folders: MailFolder[]): void
    {
        // Get the inbox folder
        const inboxFolder = this.folders.find(folder => folder.slug === 'inbox');

        // Get the component -> navigation data -> item
        const mainNavigationComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // If the main navigation component exists...
        if ( mainNavigationComponent )
        {
            const mainNavigation = mainNavigationComponent.navigation;
            const menuItem = this._fuseNavigationService.getItem('apps.mailbox', mainNavigation);

            // Update the badge title of the item
            menuItem.badge.title = inboxFolder.count + '';

            // Refresh the navigation
            mainNavigationComponent.refresh();
        }
    }
}
